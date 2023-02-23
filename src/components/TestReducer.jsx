import { useMyContext } from '../store/context'
import { actionTypes } from '../store/reducer'

export default function TestReducer() {
  const { dispatch } = useMyContext()
  return (
    <div>
      <p>TestReducer</p>
      <button
        className="btn-secondary btn"
        type="button"
        onClick={() =>
          dispatch({
            type: actionTypes.SET_VALUE,
            payload: { myValue: 'Hola Mundo' }
          })
        }
      >
        DISPATCH
      </button>
    </div>
  )
}
