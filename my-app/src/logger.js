export default function logger(state) {
  return function(next) {
    return function(action) {
      console.log('Prev State', state.getState())
      console.log('Action', action)
      const newState = next(action)
      console.log('New State', state.getState())
      return newState
    }
  }
}