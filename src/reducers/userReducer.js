const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "CREATE_USER_SUCCESS":
    return [...state, payload]

  default:
    return state
  }
}
