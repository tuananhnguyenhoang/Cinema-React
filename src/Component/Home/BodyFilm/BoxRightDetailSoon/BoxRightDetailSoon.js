import React, { Component } from 'react'
import './BoxRightDetailSoon.css'
import { connect } from 'react-redux/es/exports'
import {
    Link
} from "react-router-dom";

class BoxRightDetailSoon extends Component {
    constructor(props) {
        super();
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state = {
            date: date,
            display: true,
        }
    } componentDidMount() {
        this.props.NowSoonFunc()
    }
    render() {
        return (
            <div>
                < div className='detailfilm-right mgT20' >
                    <p className='receivevocher'>Trailer</p>
                    <div className='boxemail'>
                        {console.log(this.props.detailSoonMovie.lsSoonMovie &&
                            this.props.detailSoonMovie.lsSoonMovie)}
                        {
                            this.props.detailSoonMovie.lsSoonMovie &&
                            this.props.detailSoonMovie.lsSoonMovie.map((m, i) => (
                                <iframe height={'150px'} width={'100%'} src={`https://www.youtube.com/embed/${m.TrailerUrl.slice(-11)}`}
                                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            ))
                        }
                    </div>
                    <p className='filmdangchieu'>PHIM SẮP CHIẾU</p>
                    <div className='boxphim r'>
                        <div className='bodysaming'>
                            {this.props.nowsoon.lsMovieNoWSoon &&
                                this.props.nowsoon.lsMovieNoWSoon.soon.map((m, i) => {
                                    if (i < 3) {
                                        return (
                                            <div className='left1' key={i}>
                                                <div className='handelerimg'>
                                                    <img src={m.BannerUrl} alt='a' />
                                                    <div className='hovimg'>
                                                        <div className='boxbutton'>
                                                            <div onClick={() => { this.props.IdMovieFuncSoon(m.ApiFilmId) }}>Mua Vé</div>
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
                                    }
                                })}
                        </div>
                        {this.state.display === true ? <>
                            <div className='ViewMore'><button onClick={() => this.setState({ display: false })}>XEM THÊM </button></div>
                        </>
                            : <>
                                {this.props.nowsoon.lsMovieNoWSoon &&
                                    this.props.nowsoon.lsMovieNoWSoon.soon.map((m, i) => {
                                        if (i > 3)
                                            return (
                                                <div className='left1' key={i}>
                                                    <div className='handelerimg'>
                                                        <img src={m.BannerUrl} alt='a' />
                                                        <div className='hovimg'>
                                                            <div className='boxbutton'>
                                                                <div onClick={() => { this.props.IdMovieFuncSoon(m.ApiFilmId) }}>Mua Vé</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className='content-1-1'>{m.Title}</p>
                                                    <p className='content-1-2'>{m.TitleEn}</p>
                                                    <div className='content-1-3'>
                                                        <span className='age'>{m.ApiRatingFormat}</span>
                                                        <span className='minute'>{m.Duration}'</span>
                                                    </div>
                                                </div>
                                            )

                                    })}
                            </>
                        }
                    </div>
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
        NowSoonFunc: (val) => {       //funcion để chạy API
            dispatch({ type: "GetNowSoonSaga", payload: val })
        },
        IdMovieFuncSoon: (apiFim) => {
            dispatch({ type: "GetIdMovieSagaSoon", payload: apiFim })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BoxRightDetailSoon)
