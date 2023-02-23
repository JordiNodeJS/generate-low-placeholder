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
    <div
      className={`flex w-[300px] flex-col items-center justify-center border-2 border-dashed border-emerald-600 p-4 ${
        isDragActive && 'bg-cyan-100'
      }`}
    >
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="text-center">
          <p>Drag’ n’ drop some files here, or click to select files</p>

          <button type="button" onClick={open} className="btn-primary btn">
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
      
      reader.readAsDataURL(file)      
      reader.onload = e => {
        setImages(prevState => [
          ...prevState,
          { id: createId(), src: e.target.result }
        ])
      }

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
