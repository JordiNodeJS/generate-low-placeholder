export const initialState = {}

export const Actions = {
  SET_CLOUDINARY_IMG: 'SET_CLOUDINARY_IMG',
  SET_PUBLIC_ID: 'SET_PUBLIC_ID',
  SET_IS_UPLOADING: 'SET_IS_UPLOADING',
  SET_VALUE: 'SET_VALUE',
  SET_IMAGE: 'SET_IMAGE'
}

export default function reducer(state, action) {
  switch (action.type) {
    case Actions.SET_CLOUDINARY_IMG:
      return { ...state, ...action.payload }

    case Actions.SET_PUBLIC_ID:
      return { ...state, ...action.payload }

    case Actions.SET_IS_UPLOADING:
      return { ...state, ...action.payload }

    case Actions.SET_VALUE:
      return { ...state, ...action.payload }

    default:
      return state
  }
}
