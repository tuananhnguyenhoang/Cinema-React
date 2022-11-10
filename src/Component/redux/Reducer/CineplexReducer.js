const LoginState = {
    lsCineplex: null,
}
//Mặc định trả về phương thức quản lý State
const CimeplexR = (state = LoginState, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "GetCineplex":
            return { ...state, lsCineplex: payload }
        default:
            return state
    }
}
export default  CimeplexR