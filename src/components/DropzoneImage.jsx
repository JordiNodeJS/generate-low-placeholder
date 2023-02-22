import { useState, useCallback } from 'react'
import { createId } from '@paralleldrive/cuid2'
import { useDropzone } from 'React-dropzone'
import ImageList from './ImageList'

function Dropzone({ onDrop, accept, open }) {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept,
      onDrop
    })

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  return (
    <div className={`p-4 flex w-[300px] flex-col items-center justify-center border-2 border-emerald-600 border-dashed ${isDragActive && 'bg-cyan-100' }`}>
      <div {...getRootProps()}>
        <input
          className="input-zonebg-gray-50 block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          {...getInputProps()}
        />
        <div>
          <p>Drag’ n’ drop some files here, or click to select files</p>

          <button type="button" onClick={open} className="btn btn-primary">
            Click to select files
          </button>
        </div>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </div>
  )
}

function DropzoneImage() {
  const [images, setImages] = useState([])
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.map(file => {
      const reader = new FileReader()

      reader.onload = e => {
        setImages(prevState => [
          ...prevState,
          { id: createId(), src: e.target.result }
        ])
      }

      reader.readAsDataURL(file)
      return file
    })
  }, [])

  return (
    <div>
      <Dropzone onDrop={onDrop} accept="image/*" />
      <ImageList images={images} />
    </div>
  )
}

export default DropzoneImage
