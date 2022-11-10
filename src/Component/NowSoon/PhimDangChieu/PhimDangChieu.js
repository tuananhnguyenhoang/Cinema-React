import React, { Component } from 'react'
import './PhimDangChieu.css'
import { connect } from 'react-redux/es/exports'
import { BiRightArrowAlt } from "react-icons/bi";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import DetailFilm from '../../DetailFilm/DetailFilm';
class PhimDangChieu extends Component {
    constructor(props) {
        super();
        this.state = {
            display: true
        }
    }
    componentDidMount() {
        this.props.NowSoonFunc()
    }
    render() {
        return (
            <div className='body-phimdangchieu'>
            <div className=' body-box'>
                <div className='bodysaming'>
                    {this.props.nowsoon.lsMovieNoWSoon &&
                        this.props.nowsoon.lsMovieNoWSoon.now.map((m, i) => {
                                return (
                                    <div className='left1' key={i}>
                                        <img src={m.BannerUrl} alt='a' />
                                        <p className='content-1-1'>{m.Title}</p>
                                        <p className='content-1-2'>{m.TitleEn}</p>
                                    </div>
                                )
                            
                        })}

                </div>
            </div>
        </div >
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

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PhimDangChieu)