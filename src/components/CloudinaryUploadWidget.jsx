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
import { Cloudinary } from '@cloudinary/url-gen'
import { vectorize } from '@cloudinary/url-gen/actions/effect'
import { replaceColor } from '@cloudinary/url-gen/actions/adjust'

const CloudinaryUploadWidget = () => {
  const [isUploading, setIsUploading] = useState(false)
  const [publicId, setPublicId] = useState('')
  const [, setData] = useState(null)

  const cld = new Cloudinary({
    cloud: {
      cloudName: import.meta.env.VITE_CLOUDNAME
    },
    url: {
      secure: true // force https, set to false to force http
    }
  })

  const handleDrop = async acceptedFiles => {
    setIsUploading(true)
    const file = acceptedFiles[0]
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', import.meta.env.VITE_UPLOAD_PRESET)
    formData.append('api_key', import.meta.env.VITE_API_KEY)
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
    maxFiles: 2,
    accept: { 'image/*': [] },
    onDrop: handleDrop
  })

  const imgNotProcessed = cld.image(publicId)

  const myImgProcessed = cld
    .image(publicId)
    .adjust(replaceColor('maroon').fromColor('#2b38aa').tolerance(80))
    .effect(vectorize().numOfColors(4).detailsLevel(0.25))

  return (
    <div
      className={`flex w-full flex-col items-center justify-center border-2 border-dashed border-emerald-600 p-4 ${
        isDragActive && 'bg-cyan-100'
      }`}
    >
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isUploading && <p>Subiendo imagen...</p>}
        <button className="btn-primary btn" type="button">
          Upload Image
        </button>
      </div>
      {publicId !== null ? (
        <div>
          <two-up>
            <AdvancedImage
              cldImg={imgNotProcessed}
              plugins={[
                lazyload(),
                responsive(),
                accessibility(),
                placeholder()
              ]}
            />
            <AdvancedImage
              cldImg={myImgProcessed}
              plugins={[
                lazyload(),
                responsive(),
                accessibility(),
                placeholder()
              ]}
            />
          </two-up>
        </div>
      ) : (
        <p>Arrastra una imagen aquí o haz clic para seleccionarla.</p>
      )}
      {publicId && (
        <a className="btn-info btn" download href={myImgProcessed.toURL()}>
          download
        </a>
      )}
    </div>
  )
}

export default CloudinaryUploadWidget
