import { useMyContext } from '../store/context'
import { Actions } from '../store/reducer'

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
            type: Actions.SET_VALUE,
            payload: { myValue: 'Hola Mundo' }
          })
        }
      >
        DISPATCH
      </button>
    </div>
  )
}
