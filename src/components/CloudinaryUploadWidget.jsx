import React, { useState } from 'react'
import { AdvancedImage, lazyload, accessibility, responsive, placeholder } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import { useDropzone } from 'react-dropzone'

import {sepia} from "@cloudinary/url-gen/actions/effect";

const CloudinaryUploadWidget = () => {
  const [image, setImage] = useState({ secure_url: '' })
  const [isUploading, setIsUploading] = useState(false)
  const [publicId, setPublicId] = useState('')
  const [, setData] = useState(null)

  const cloudinary = new Cloudinary({
    cloud: {
      cloudName: 'dsz8adppb' // reemplaza por tu cloud name
    }
  })

  const handleDrop = async acceptedFiles => {
    setIsUploading(true)
    const file = acceptedFiles[0]
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'miduhackaton') // reemplaza por tu upload preset
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${
          cloudinary.getConfig().cloud.cloudName
        }/image/upload`,
        {
          method: 'POST',
          body: formData
        }
      )
      const data = await response.json()
      setData(data)
      setImage(data.secure_url)
      setPublicId(data.public_id)
      setIsUploading(false)
    } catch (error) {
      console.error(error)
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {'image/*': []},
    onDrop: handleDrop
  })

  const myImgProcessed = cloudinary.image(publicId, {
    crop: 'fill',
    width: 300,
    height: 300
  }).effect(sepia()) 

  return (
    <div>
      <div
        {...getRootProps()}
        className={`flex w-full flex-col items-center justify-center border-2 border-dashed border-emerald-600 p-4 ${
          isDragActive && 'bg-cyan-100'
        }`}
      >
        <input {...getInputProps()} />
        {isUploading && <p>Subiendo imagen...</p>}

        {image ? (
         <AdvancedImage
         cldImg={myImgProcessed}  plugins={[lazyload(), responsive(), accessibility(), placeholder()]}
       />
        ) : (
          <p>Arrastra una imagen aquí o haz clic para seleccionarla.</p>
        )}
      </div>
    </div>
  )
}

export default CloudinaryUploadWidget
