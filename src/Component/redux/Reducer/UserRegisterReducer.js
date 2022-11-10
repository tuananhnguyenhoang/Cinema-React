//State Global
const LoginState = {
    lsRegisterUser: null
}
//Mặc định trả về phương thức quản lý State
const urd = (state = LoginState, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "GetRegisterUser":
            return {...state, lsRegisterUser: payload }
        //Action Logout

        default:
            return state
    }
}
export default urd