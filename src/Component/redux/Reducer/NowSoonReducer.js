const NowSoonState = {
   
    lsMovieNoWSoon: null
}
//Mặc định trả về phương thức quản lý State
const NowSoon = (state = NowSoonState, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "GetNowSoonMovie":
            return { ...state, lsMovieNoWSoon: payload }
        default:
            return state
    }
}
export default NowSoon