import { useContext, useReducer, createContext, useMemo } from 'react'
import reducer, { initialState } from './reducer'

const Context = createContext(initialState)

export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])
  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

// custom hook
export const useMyContext = () => useContext(Context)
