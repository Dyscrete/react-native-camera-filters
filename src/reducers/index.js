// Reducers
import sessionReducer from './sessionReducer'

export default function reducers(state = {}, action) {
  return {
    session: sessionReducer(state, action),
  }
}
