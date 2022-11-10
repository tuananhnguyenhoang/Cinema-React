import React, { Component } from 'react'
import './DetailFilmSoon.css'
import { BsFillAlarmFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { connect } from 'react-redux/es/exports'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import BoxRightDetailSoon from '../BodyFilm/BoxRightDetailSoon/BoxRightDetailSoon';
class DetailFilmSoon extends Component {
    constructor(props) {
        super();
        this.state = {
            display: true,
            CinePlex: "",
            idFilm: "",
            day: "",
        }
    }
    componentDidMount() {
        this.props.NowSoonFunc()
    }
    render() {
        const HandleCineplex = (event) => {
            this.props.HandleCineplexFunc(event.target.value)

        }
        const HandleDay = (event) => {
            this.setState({

            })
            this.props.HandleDayFunc(event.target.value, this.state.idFilm)

        }
        function getFormattedDate(dt) {
            var today = new Date(dt)
            var week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
            var monthNames = new Array("  ", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            )
            var day = week[today.getDay()];
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();
            var hour = today.getHours();
            var minu = today.getMinutes();

            if (dd < 10) { dd = '0' + dd }
            if (mm < 10) { mm = '0' + mm }
            if (minu < 10) { minu = '0' + minu }

            return yyyy + '-' + mm + '-' + dd;
        }
        var TimeDay = (dt) => {
            var date = new Date(dt)
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? "PM" : "AM"
            hours = hours % 12;
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            return (`${hours}:${minutes} ${ampm}`)
        }
        return (
            <div className='detailfilm'>
                <div className='detailfilm-left mgR mgT20' >
                    {
                        this.props.detailSoonMovie.lsSoonMovie &&
                        this.props.detailSoonMovie.lsSoonMovie.map((m, i) => (
                            <div key={i} >
                                <div style={{ backgroundImage: "url(" + `${m.BannerUrl}` + ")" }} className='detailfilmleft-img' >
                                    <div className='img-left'>
                                        <img src={m.GraphicUrl} style={{ width: "250px", height: "400px" }} alt='a' />
                                    </div>
                                    <div className='IMG-left'>
                                        <p className='IMG-p1'>{m.Title}</p>
                                        <p className='IMG-p2'>{m.TitleEn}</p>
                                        <div className='evaluate'>
                                            <div className='star'>
                                                <div className='star-star'><img src='https://www.galaxycine.vn/website/images/ic_star_yellow.png' /></div>
                                                <div className='star-p'>
                                                    <p>{m.Meta.RatingValue}<span>/10</span></p>
                                                    <p><span>{m.Meta.RatingCount}</span></p>
                                                </div>
                                            </div>
                                            <div className='button'><button>Đánh giá</button></div>
                                        </div>
                                        <div className='box-like'>
                                            <div className='C18'>{m.ApiRating}</div>
                                            <BsFillAlarmFill className='larm' />
                                            <div className='minutes'>{m.Duration} phút</div>
                                            <div className='button-like'><AiOutlineLike className='button-like1' /><div className='like114'>Thích 88</div></div>
                                            <div className='share'>Chia Sẻ</div>
                                        </div>
                                        <p className='Category p'><span>Thể loại:</span>{m.ApiGenreName}</p>
                                        <p className='Director p'><span>Đạo diễn:</span> Paker Finn</p>
                                        <p className='Country p'><span>Quốc gia:</span>{m.Countries[0].Name}</p>
                                        <p className='Producer p'><span>Nhà sản xuất:</span> Temple Hill Entertainment</p>
                                        <p className='premieredate p'><span>Ngày khởi chiếu:</span>{getFormattedDate(m.OpeningDate)}</p>
                                        <div className='detailfilmleft-content'>
                                            <h3 className='content-film'>NỘI DUNG PHIM</h3>
                                            <div>
                                                <p className='film-text1'>{m.SynopsisEn}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                </div>
                <div>
                    <BoxRightDetailSoon />
                </div>


            </div>

        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        nowsoon: state.nowsoon,
        detailmovie: state.detailmovie,
        detailSoonMovie: state.detailSoonMovie,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        NowSoonFunc: (val) => {
            dispatch({ type: "GetNowSoonSaga", payload: val })
        },
        IdMovieFunc: (val) => {
            dispatch({ type: "GetIdMovieSaga", payload: val })
        },
        // HandleCineplexFunc: (val) => {
        //     dispatch({ type: "GetDetailCinePlexSaga", payload: val })
        // },
        HandleDayFunc: (day, idFilm) => {
            dispatch({ type: "GetDaySaga", payload: { day: day, idFilm: idFilm } })
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailFilmSoon)