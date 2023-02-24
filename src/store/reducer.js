export const initialState = {}

export const actionTypes = {
  SET_VALUE: 'SET_VALUE',
  SET_IMAGE: 'SET_IMAGE'
}

export default function reducer(state, action) {
  switch (action.type) {
    case actionTypes.SET_IMAGE:
      return { ...state }

    case actionTypes.SET_VALUE:
      return { ...state, ...action.payload }

    default:
      return state
  }
}
