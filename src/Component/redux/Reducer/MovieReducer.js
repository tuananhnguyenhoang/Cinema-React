const LoginState = {
   
    lsMovie: null
}
//Mặc định trả về phương thức quản lý State
const MovieR = (state = LoginState, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "GetMovie":
            return { ...state, lsMovie: payload }
        default:
            return state
    }
}
export default MovieR