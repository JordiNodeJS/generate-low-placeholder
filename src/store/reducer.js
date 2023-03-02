export const initialState = {}

export const Actions = {
  SET_VALUE: 'SET_VALUE',
  SET_IMAGE: 'SET_IMAGE'
}

export default function reducer(state, action) {
  switch (action.type) {
    case Actions.SET_IMAGE:
      return { ...state }

    case Actions.SET_VALUE:
      return { ...state, ...action.payload }

    default:
      return state
  }
}
