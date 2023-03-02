import { useState } from 'react'
import 'two-up-element'
import { useDropzone } from 'react-dropzone'
import {
  AdvancedImage,
  lazyload,
  accessibility,
  responsive,
  placeholder
} from '@cloudinary/react'
import Spinner from './Spinner'
import {
  cld,
  imgOriginal,
  imgBackground,
  imgReadyToDownload
} from '../utils/transformations'

const CloudinaryUpload = () => {
  const [isUploading, setIsUploading] = useState(false)
  const [publicId, setPublicId] = useState(null)
  const [, setData] = useState(null)

  const handleDrop = async acceptedFiles => {
    setIsUploading(true)
    const file = acceptedFiles[0]
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', import.meta.env.VITE_UPLOAD_PRESET)
    // formData.append('api_key', import.meta.env.VITE_API_KEY)
    formData.append('timestamp', Date.now() / 1000)
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${
          cld.getConfig().cloud.cloudName
        }/image/upload`,
        {
          method: 'POST',
          body: formData
        }
      )
      const data = await response.json()
      setData(data)
      setPublicId(data.public_id)
      setIsUploading(false)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    noClick: false,
    maxFiles: 1,
    accept: { 'image/*': [] },
    onDrop: handleDrop
  })

  return (
    <div
      className={`flex w-full flex-col items-center justify-center shadow-lg shadow-gray-200 bg-pink-50 p-4 ${
        isDragActive && 'bg-cyan-100'
      }`}
    >
      <div
        {...getRootProps({
          className: `flex flex-col w-full items-center justify-center border-2 border-dashed border-violet-200 p-4 mb-4 ${
            isDragActive && 'bg-cyan-100'
          }`
        })}
      >
        <input {...getInputProps()} />
        {isUploading && (
          <div className="mb-3 flex items-center">
            <Spinner />
            Preparing your photo
          </div>
        )}
        <button className="btn-primary btn mb-4" type="button">
          Upload Image
        </button>
        <p>Drag and Drop an Image.</p>
      </div>
      {publicId !== null && (
        <div>
          <two-up>
            <AdvancedImage
              cldImg={imgOriginal(publicId)}
              plugins={[
                lazyload(),
                responsive(),
                accessibility(),
                placeholder()
              ]}
            />
            <AdvancedImage
              cldImg={imgBackground(publicId)}
              plugins={[
                lazyload(),
                responsive(),
                accessibility(),
                placeholder()
              ]}
            />
          </two-up>
        </div>
      )}
      {publicId && (
        <a
          className="btn-secondary btn mt-4"
          download
          href={imgReadyToDownload(publicId)}
          target="_blank"
          rel="noreferrer"
        >
          download
        </a>
      )}
    </div>
  )
}

export default CloudinaryUpload
