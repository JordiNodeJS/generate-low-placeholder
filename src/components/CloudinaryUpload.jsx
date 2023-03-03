import { useEffect } from 'react'
import 'two-up-element'
import { useDropzone } from 'react-dropzone'
import Spinner from './Spinner'
import {
  imgReadyToDownload
} from '../utils/transformations'
import { useMyContext } from '../store/context'
import { Actions } from '../store/reducer'
import TwoUp from './TwoUp'
import { handleDrop } from '../utils/handleDrop'

const CloudinaryUpload = () => {
  const { state, dispatch } = useMyContext()
  const { publicId, isUpLoading } = state

  useEffect(() => {
    dispatch({ type: Actions.SET_PUBLIC_ID, payload: { publicId: null } })
    dispatch({
      type: Actions.SET_IS_UPLOADING,
      payload: { isUpLoading: false }
    })
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    noClick: false,
    maxFiles: 1,
    accept: { 'image/*': [] },
    onDrop: acceptedFiles => handleDrop(acceptedFiles, dispatch)
  })

  return (
    <div className="flex w-full flex-col items-center justify-center bg-pink-50 p-4 shadow-lg shadow-gray-200">
      <div
        {...getRootProps({
          className: `flex flex-col w-full items-center justify-center border-2 border-dashed border-violet-200 p-4 mb-4 ${
            isDragActive && 'bg-cyan-100'
          }`
        })}
      >
        <input {...getInputProps()} />
        {isUpLoading && (
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
      <TwoUp />
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
