//State Global
const LoginState = {
    lsdataMovieToCinema: null,
   
}
//Mặc định trả về phương thức quản lý State
const MTCR = (state = LoginState, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "GetdataMovieToCinema":
            return { ...state, lsdataMovieToCinema: payload }
        default:
            return state
    }
}
export default MTCR