//State Global
const LoginState = {
    lsUserLogin: null,
    OutLogin: true
}
//Mặc định trả về phương thức quản lý State
const ulrd = (state = LoginState, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "GetLoginUser":
            return { ...state, lsUserLogin: payload }
        //Action Logout
        case "GetOutLoginUser":
            return { ...state, OutLogin: payload }
        default:
            return state
    }
}
export default ulrd