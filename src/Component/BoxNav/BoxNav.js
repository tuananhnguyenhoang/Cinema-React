import React, { Component } from 'react'
import './BoxNav.css'
import { connect } from 'react-redux/es/exports'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
class BoxNav extends Component {
    constructor() {
        super();
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state = {
            date: date,
            display: true,
        }
    }
    componentDidMount() {
        this.props.NowSoonFunc()
    }
    render() {

        return (
            <div className='MainBoxNavBar'>
                {/* {console.log(this.state.date)} */}
                <div className='Div-phimdangchieu'><p>Phim Đang Chiếu</p></div>
                <div className='BoxNavBar'>
                    {this.props.nowsoon.lsMovieNoWSoon &&
                        this.props.nowsoon.lsMovieNoWSoon.now.map((m, i) => {
                            if (i < 4) {
                                return (
                                    <div className='left1' key={i}>
                                        <div className='handelerimg'>
                                            <img src={m.BannerUrl} alt='a' />
                                            <div className='hovimg'>
                                                <div className='boxbutton'>
                                                    <Link to="DetailFilm">
                                                        <button onClick={() => { this.props.IdMovieFunc(m.ApiFilmId, this.state.date) }} key={i}>Mua Vé</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='content-1-1'>{m.Title}</p>
                                        <p className='content-1-2' >{m.TitleEn}</p>
                                    </div>
                                )
                            }
                        })}
                </div>
                <div className='Div-phimsapchieu'><p>Phim Sắp Chiếu</p></div>
                <div className='BoxNavBar'>
                    {this.props.nowsoon.lsMovieNoWSoon &&
                        this.props.nowsoon.lsMovieNoWSoon.soon.map((m, i) => {
                            if (i < 4) {
                                return (
                                    <div className='left1' key={i}>
                                        <div className='handelerimg'>
                                            <img src={m.BannerUrl} alt='a' />
                                            <div className='hovimg'>
                                                <div className='boxbutton'>
                                                    <Link to="DetailFilmSoon">
                                                        <button onClick={() => { this.props.IdMovieFuncSoon(m.ApiFilmId) }} key={i}>Mua Vé</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='content-1-1'>{m.Title}</p>
                                        <p className='content-1-2' >{m.TitleEn}</p>
                                    </div>
                                )
                            }
                        })}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        nowsoon: state.nowsoon
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        NowSoonFunc: (val) => {
            dispatch({ type: "GetNowSoonSaga", payload: val })
        },
        IdMovieFuncSoon: (apiFim) => {
            dispatch({ type: "GetIdMovieSagaSoon", payload: [apiFim] })
        },
        IdMovieFunc: (apiFim, date) => {
            dispatch({ type: "GetIdMovieSaga", payload: [apiFim, date] })
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BoxNav)
