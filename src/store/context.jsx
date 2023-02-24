import { useContext, useReducer, createContext } from 'react'
import reducer, { initialState } from './reducer'

const Context = createContext(initialState)

export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Context.Provider value={ { state, dispatch } }>{children}</Context.Provider>
}

// custom hook
export const useMyContext = () => useContext(Context)
