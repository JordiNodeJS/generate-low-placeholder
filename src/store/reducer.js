export const initialState = {}

export const Actions = {
  SET_PUBLIC_ID: 'SET_PUBLIC_ID',
  SET_VALUE: 'SET_VALUE',
  SET_IMAGE: 'SET_IMAGE'
}

export default function reducer(state, action) {
  switch (action.type) {
    case Actions.SET_PUBLIC_ID:
      return { ...state, ...action.payload }

    case Actions.SET_IMAGE:
      return { ...state }

    case Actions.SET_VALUE:
      return { ...state, ...action.payload }

    default:
      return state
  }
}
