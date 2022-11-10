// import lscategoriesReducer from '../Reducer/categoriesReducer'
import CR from '../Reducer/CinemaReducer'

import { applyMiddleware } from 'redux'
import MiddleReSa from '../Saga/MiddleReSa'
import createSagaMiddleware from 'redux-saga'
import CimeplexR from '../Reducer/CineplexReducer'
import MovieR from '../Reducer/MovieReducer'
import urd from '../Reducer/UserRegisterReducer'
import ulrd from '../Reducer/UserLoginReducer'
import NowSoon from '../Reducer/NowSoonReducer'
import MTCR from '../Reducer/dataMovieToCinemaReducer'
import IdMoviedetail from '../Reducer/DetailMovieReducer'
import IdMoviedetailSoon from '../Reducer/DetailSoonReducer'
import PayR from '../Reducer/PaymentReducer'
var redux = require("redux")
const sagaMiddleware = createSagaMiddleware()

const allReducer = redux.combineReducers({
    cinema: CR,
    cineplex: CimeplexR,
    Movie: MovieR,
    UserRegister: urd,
    UserLogin:ulrd,
    nowsoon: NowSoon,
    movieToCinema:MTCR,
    detailmovie:IdMoviedetail,
    detailSoonMovie:IdMoviedetailSoon,
    PayR:PayR
})
export default redux.createStore(allReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(MiddleReSa) 