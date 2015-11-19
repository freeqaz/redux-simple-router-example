const initialState = {
  wow: 'such state'
};

function blankReducer(state = initialState, action) {
  // For now, don’t handle any actions
  // and just return the state given to us.
  return state
}

export default {
  blankReducer
}
