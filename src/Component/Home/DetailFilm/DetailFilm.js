import React, { Component } from 'react'
import './DetailFilm.css'
import { BsFillAlarmFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { connect } from 'react-redux/es/exports'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Popup from "reactjs-popup";

import BoxRightDetail from '../BoxRightDetail/BoxRightDetail';
import Login from '../../LogIn/Login/Login';
import Register from '../../LogIn/Register/Register';
import LogInBox from '../../LogIn/LogInBox';
class DetailFilm extends Component {
    constructor(props) {
        super();
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state = {
            display: true,
            CinePlex: null,
            idFilm: null,
            day: date,
            title: null,
            items: null,
            BtnSelect: [],
            show: true,
            statusState: true

        }
    }
    componentDidUpdate() {
        if (!this.state.CinePlex && this.props.detailmovie.lsdetaildateMovie && this.props.detailmovie.lsdetailMovie) {
            this.setState({
                CinePlex: this.props.detailmovie.lsdetaildateMovie.Cineplexs[0].Id,
                idFilm: this.props.detailmovie.lsdetailMovie[[0]].ApiFilmId
            }, () => {
                this.props.GetapiFilmIdPayFunc(this.props.detailmovie.lsdetailMovie[[0]].ApiFilmId)
                this.props.GetbannerFilmPayFunc(this.props.detailmovie.lsdetailMovie[[0]].BannerUrl)
                this.props.GetAgeAblePayFunc(this.props.detailmovie.lsdetailMovie[[0]].ApiRatingFormat)
                this.props.GettitleFilmFunc(this.props.detailmovie.lsdetailMovie[[0]].Title)

            })
        }
    }
    componentDidMount() {
        this.props.NowSoonFunc()
    }
    render() {
        const HandleCineplex = (event) => {
            this.setState({
                CinePlex: event.target.value
            }, () => this.props.HandleCineplexFunc(this.state.CinePlex, this.state.day, this.state.idFilm))

        }
        const HandleDay = (event) => {
            this.setState({
                day: event.target.value
            }, () => this.props.HandleDayFunc(this.state.CinePlex, this.state.day, this.state.idFilm))

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
        const SetBtnSelect = (btn) => {
            let total = 1
            let arr = this.state.BtnSelect

            if (arr.length === total) {
                arr = arr.splice(0, total - 1)
            }

            arr.unshift(btn)
            // console.log(arr)
            this.setState({
                BtnSelect: arr
            })
        }
        return (
            <div className='detailfilm'>
                <div className='detailfilm-left mgR mgT20' >

                    {
                        this.props.detailmovie.lsdetailMovie &&
                        this.props.detailmovie.lsdetailMovie.map((m, i) => (
                            <div key={i} className="mainback">
                                
                                <div style={{ backgroundImage: "url(" + `${m.BannerUrl}` + ")" }} className='detailfilmleft-img' >

                                    <div className='img-left'>
                                        <img src={m.GraphicUrl} style={{ width: "250px", height: "400px" }} alt='a' />
                                    </div>
                                    <div className='IMG-left'>
                                        <h1 className='IMG-p1'>{m.Title}</h1>
                                        <h5 className='IMG-p2'>{m.TitleEn}</h5>
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
                                            <div className='C18'>{m.ApiRatingFormat}</div>
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
                                                <p className='film-text1'>{m.SynopsisEn}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Content */}

                            </div>
                        ))
                    }
                    {/* <p className='seemore'>Xem thêm</p> */}
                    <p className='showtimes'>LỊCH CHIẾU</p>

                    {/* select */}

                    <div className='boxinput'>
                        <select className="b" onChange={(event) => {
                            HandleCineplex(event)
                            this.props.GetdatePayFunc(this.state.day)
                            this.props.GetapiCinemaIdPayFunc(event.target.value)
                            console.log(event.target.name)
                            
                        }}>
                            <option hidden>Chọn Cụm Rạp</option>
                            {this.props.detailmovie.lsdetaildateMovie &&
                                this.props.detailmovie.lsdetaildateMovie.Cineplexs.map((e, u) => (
                                    <option key={u} value={e.Id}>{e.Name}</option>
                                ))
                            }
                        </select>
                        <select className="b" onChange={HandleDay} >

                            {this.props.detailmovie.lsdetaildateMovie &&
                                this.props.detailmovie.lsdetaildateMovie.ShowTimes.map((e, p) => (
                                    <option key={p} value={getFormattedDate(e)}>{getFormattedDate(e)}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='suatchieu'>

                        {/* Khung suat chieu */}
                        {
                            // this.props.detailmovie.lsselect ? <>
                            //     {
                            this.props.detailmovie.lsselect &&
                            this.props.detailmovie.lsselect.Cinemas.Items.map((n, i) => {

                                return (
                                    <div onClick={() => this.props.GetNameCineplexPayFunc(n.Name)} className='timepickerbox' key={i}>
                                        <div className='Galaxynguyendu'><p>{n.Name}</p></div>
                                        <div className='galaxyhour'>
                                            <div className='galaxyhour-left'>2D - Phụ đề</div>
                                            <div className='galaxyhour-right'>
                                                {
                                                    n.VersionsCaptions[0].ShowTimes.map((m, i) => {
                                                        return <div className='galaxyhour-div'>
                                                            {

                                                                this.props.UserLogin.lsUserLogin &&
                                                                    this.props.UserLogin.lsUserLogin.status === 200 && this.props.UserLogin.OutLogin === true ?

                                                                    <Link to='/Food' > <button onClick={() => {
                                                                        this.props.GetcineplexPayFunc(n.ApiCinemaId)
                                                                        this.props.GettimeFilmPayFunc(TimeDay(m.ShowTime))
                                                                    }} className='galaxyhour-button' key={i}>{TimeDay(m.ShowTime)}</button> </Link>
                                                                    :

                                                                    <LogInBox />


                                                            }


                                                        </div>

                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )

                            })
                        }

                        {/* Bình luận */}
                        <div className='Comment'>


                            <h3 className='mgB10'>BÌNH LUẬN</h3>
                            <div className='boxCMT' >
                                {this.props.detailmovie.lsdetailCommentMovie &&
                                    this.props.detailmovie.lsdetailCommentMovie[0].Comment.map((n, v) => {
                                        return (
                                            <div className='TagName' key={v} onClick={() => SetBtnSelect(n.Items)}>
                                                <span className='lstitle'>{n.TagName}</span>
                                            </div>
                                        )

                                    })
                                }
                            </div>
                            <div>
                                {this.state.BtnSelect.length > 0 &&
                                    this.state.BtnSelect.map((m, i) => (
                                        m.map((n, y) => (
                                            <div className='detailcmt' key={y}>
                                                {n.Avatar === null ? <div className='detailcmt-left'><div></div>
                                                    {/* div ảo thay thế hình ảnh null */}
                                                </div>
                                                    :
                                                    <div className='detailcmt-left'><img src={n.Avatar} /></div>
                                                }
                                                <div className='detailcmt-right'>
                                                    <div className='top1'><span>{n.ShowName}</span>{getFormattedDate(n.CreatedAt)}</div>
                                                    <div className='top2'>{n.Comment}</div>
                                                </div>
                                            </div>
                                        ))
                                    ))
                                }
                            </div>


                        </div>
                    </div>
                </div>
                {
                    console.log(this.state)
                }
                {
                    this.props.detailmovie &&
                    console.log(this.props.detailmovie.lsdetailMovie)
                }
                {/* Bên phải */}
                <div className='x'>
                    <BoxRightDetail />
                </div>


            </div>

        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        nowsoon: state.nowsoon,
        detailmovie: state.detailmovie,
        nowsoon: state.nowsoon,
        movieToCinema: state.movieToCinema,
        UserRegister: state.UserRegister,
        UserLogin: state.UserLogin,
        PayR: state.PayR
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        NowSoonFunc: (val) => {       //funcion để chạy API
            dispatch({ type: "GetNowSoonSaga", payload: val })
        },
        // IdMovieFunc: (val) => {
        //     dispatch({ type: "GetIdMovieSaga", payload: val })
        // },
        HandleCineplexFunc: (cinePlex, day, idFilm) => {
            dispatch({ type: "GetCinePlexsagadetail", payload: { cinePlex: cinePlex, day: day, idFilm: idFilm } })
        },
        HandleDayFunc: (cinePlex, day, idFilm) => {
            dispatch({ type: "GetDaySaga", payload: { cinePlex: cinePlex, day: day, idFilm: idFilm } })
        },
        GetcineplexPayFunc: (val) => {
            dispatch({ type: "GetcineplexPay", payload: val })
        },
        GetapiCinemaIdPayFunc: (val) => {
            dispatch({ type: "GetapiCinemaIdPay", payload: val })
        },
        GetapiFilmIdPayFunc: (val) => {
            dispatch({ type: "GetapiFilmIdPay", payload: val })
        },
        GetdatePayFunc: (val) => {
            dispatch({ type: "GetdatePay", payload: val })
        },

        GettimeFilmPayFunc: (val) => {
            dispatch({ type: "GettimeFilmPay", payload: val })
        },
        GettitleFilmFunc: (val) => {
            dispatch({ type: "GettitleFilm", payload: val })
        },
        GetbannerFilmPayFunc: (val) => {
            dispatch({ type: "GetbannerFilmPay", payload: val })
        },
        GetNameCineplexPayFunc: (val) => {
            dispatch({ type: "GetNameCineplexPay", payload: val })
        },
        GetAgeAblePayFunc: (val) => {
            dispatch({ type: "GetAgeAblePay", payload: val })
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailFilm)