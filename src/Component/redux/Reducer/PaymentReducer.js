const LoginState = {
    lsInfoPay: null,
    emailPay: "",
    cineplex: "",
    apiCinemaId: "",
    apiFilmId: "",
    seatCode: [],
    date: "",
    Combo: "",
    CountTicket: "",

    totalPay: "",

    timeFilmPay: "",
    titleFilm: "",
    bannerFilm: "",
    NameCineplex: "",
    AgeAble: "",
    titleFood: ""
}
//Mặc định trả về phương thức quản lý State
const PayR = (state = LoginState, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "GetPaymentAPI":
            return { ...state, lsInfoPay: payload }
        case "GetemailPay":
            return { ...state, emailPay: payload }
        case "GetcineplexPay":
            return { ...state, cineplex: payload }
        case "GetapiCinemaIdPay":
            return { ...state, apiCinemaId: payload }
        case "GetapiFilmIdPay":
            return { ...state, apiFilmId: payload }
        case "GetseatCodePay":
            return { ...state, seatCode: payload }
        case "GetdatePay":
            return { ...state, date: payload }
        case "GetComboPay":
            return { ...state, Combo: payload }
        case "GetCountPay":
            return { ...state, CountTicket: payload }
        case "GettotalPay":
            return { ...state, totalPay: payload }
        case "GetFoodPay":
            return { ...state, titleFood: payload }

        case "GettimeFilmPay":
            return { ...state, timeFilmPay: payload }
        case "GettitleFilm":
            return { ...state, titleFilm: payload }
        case "GetbannerFilmPay":
            return { ...state, bannerFilm: payload }
        case "GetNameCineplexPay":
            return { ...state, NameCineplex: payload }
        case "GetAgeAblePay":
            return { ...state, AgeAble: payload }

        default:
            return state
    }
}
export default PayR