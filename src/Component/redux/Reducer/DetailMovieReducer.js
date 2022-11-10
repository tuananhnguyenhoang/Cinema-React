const LoginState = {
    lsdetailMovie: null,
    lsdetaildateMovie: null,
    lsdetailCommentMovie: null,
    lsselect: null
}
//Mặc định trả về phương thức quản lý State
const IdMoviedetail = (state = LoginState, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "GetDatadetailMovie":
            return {
                ...state,
                lsdetailMovie: payload.lsdetailMovie,
                lsdetaildateMovie: payload.lsdetaildateMovie,
                lsdetailCommentMovie: payload.lsdetailCommentMovie,
            }
        case "GetDataCineSelected":
            return {
                ...state,
                lsselect: payload.lsselect,
            }
        case "GetDataDaySelected":
            return {
                ...state,
                lsselect: payload.lsselect,
            }
        default:
            return state
    }
}
export default IdMoviedetail