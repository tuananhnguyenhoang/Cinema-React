const LoginState = {
    lsSoonMovie: null,
}
const IdMoviedetailSoon = (state = LoginState, { type, payload }) => {
    switch (type) {
        case "GetSoondetailMovie":
            return {
                lsSoonMovie: payload
            }
        default:
            return state
    }
}
export default IdMoviedetailSoon