import React, { Component } from 'react'
import './PhimDangChieu6.css'
import Popup from "reactjs-popup";
import { connect } from 'react-redux/es/exports'
import { BiRightArrowAlt } from "react-icons/bi";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
class PhimDangChieu6 extends Component {
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
            <div className='body-phimdangchieu'>
                {/* {console.log(this.props.nowsoon)} */}
                <div className=' body-box'>
                    <div className='bodysaming'>
                        {this.props.nowsoon.lsMovieNoWSoon &&
                            this.props.nowsoon.lsMovieNoWSoon.now.map((m, i) => {
                                return (
                                    <div className='left1' key={i}>
                                        <div className='handelerimg'>
                                            <img src={m.BannerUrl} alt='a' />
                                            <div className='hovimg'>
                                                <div className='boxbutton'>
                                                    <Link to="DetailFilm">
                                                        <button onClick={() => { this.props.IdMovieFunc(m.ApiFilmId, this.state.date) }} >Mua Vé</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        <p className='content-1-1'>{m.Title}</p>
                                        <p className='content-1-2' >{m.TitleEn}</p>
                                        <div className='content-1-3'>
                                            <span className='age'>{m.ApiRatingFormat}</span>
                                            <span className='minute'>{m.Duration}'</span>
                                        </div>
                                    </div>

                                )
                            })}
                    </div>

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
        IdMovieFunc: (apiFim, date) => {
            dispatch({ type: "GetIdMovieSaga", payload: [apiFim, date] })
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PhimDangChieu6)