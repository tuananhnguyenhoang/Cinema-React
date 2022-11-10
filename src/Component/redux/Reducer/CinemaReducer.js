//State Global
const LoginState = {
    lsCinema: null,
   
}
//Mặc định trả về phương thức quản lý State
const CR = (state = LoginState, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "GetCinema":
            return { ...state, lsCinema: payload }
        default:
            return state
    }
}
export default CR