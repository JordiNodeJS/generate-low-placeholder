import { useEffect, useState } from 'react'
import { Cloudinary } from '@cloudinary/url-gen'

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDNAME,
    apiKey: import.meta.env.VITE_API_KEY,
    apiSecret: import.meta.env.VITE_API_KEY_SECRET
  }
})
const fetchImages = async () => {
  const response = await fetch(
    `https://${cloudinary.getConfig().cloud.apiKey}:${
      cloudinary.getConfig().cloud.apiSecret
    }@api.cloudinary.com/v1_1/${
      cloudinary.getConfig().cloud.cloudName
    }/resources/image`
  )
  // const response = await fetch(import.meta.env.VITE_URL_RESOURCES)
  const data = await response.json()
  return data.resources
}

// const fetchImages = async () => {
//   const response = await fetch(
//     `https://api.cloudinary.com/v1_1/${
//       cloudinary.getConfig().cloud.cloudName
//     }/resources/image`,
//     {
//       headers: {
//         Authorization: `Basic ${btoa(
//           `${cloudinary.getConfig().cloud.apiKey}:${
//             cloudinary.getConfig().cloud.apiSecret
//           }`
//         )}`,
//         'Content-Type': 'application/json'
//       }
//     }
//   )
//   const data = await response.json()
//   return data.resources
// }

const ImageGallery = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    const getImages = async () => {
      const images = await fetchImages()
      setImages(images)
    }
    getImages()
  }, [])

  return (
    <div>
      {images?.map(image => (
        <img
          key={image.public_id}
          src={cloudinary.url(image.public_id)}
          alt={image.public_id}
        />
      ))}
    </div>
  )
}

export default ImageGallery
