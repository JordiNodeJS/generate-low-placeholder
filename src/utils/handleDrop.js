import { Actions } from '../store/reducer'
import { cld } from './transformations'

export const handleDrop = async (acceptedFiles, dispatch) => {
  dispatch({ type: Actions.SET_IS_UPLOADING, payload: { isUpLoading: true } })
  const file = acceptedFiles[0]
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', import.meta.env.VITE_UPLOAD_PRESET)
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
    dispatch({
      type: Actions.SET_CLOUDINARY_IMG,
      payload: { cldImage: data }
    })

    dispatch({
      type: Actions.SET_PUBLIC_ID,
      payload: { publicId: data.public_id }
    })
    dispatch({
      type: Actions.SET_IS_UPLOADING,
      payload: { isUpLoading: false }
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}
