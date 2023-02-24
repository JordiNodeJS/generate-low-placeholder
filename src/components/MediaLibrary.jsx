import { useEffect, useState } from 'react'
import { Cloudinary } from '@cloudinary/url-gen'


const cloudinary = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDNAME,
    apiKey: import.meta.env.VITE_API_KEY,
    apiSecret: import.meta.env.VITE_API_KEY_SECRET
  }
})

const MediaLibrary = () => {
  const [assets, setAssets] = useState([])

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/your_cloud_name/resources/image`
        )
        const data = await response.json()
        setAssets(data.resources)
      } catch (error) {
        console.error(error)
      }
    }

    fetchAssets()
  }, [])

  return (
    <div>
      {assets.map(asset => (
        <img src={asset.url} alt={asset.public_id} key={asset.public_id} />
      ))}
    </div>
  )
}

export default MediaLibrary
