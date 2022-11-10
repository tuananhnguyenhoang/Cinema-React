import React, { Component } from 'react'
import './BoxRightDetail.css'
import { connect } from 'react-redux/es/exports'
import {
  Link
} from "react-router-dom";
class BoxRightDetail extends Component {
  constructor(props) {
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
      <div>
        < div className='detailfilm-right mgT20' >
          <p className='receivevocher'>Trailer</p>
          <div className='boxemail'>
            {
              this.props.detailmovie.lsdetailMovie &&
              this.props.detailmovie.lsdetailMovie.map((m, i) => (
                <iframe height={'150px'} width={'100%'} src={`https://www.youtube.com/embed/${m.TrailerUrl.slice(-11)}`}
                  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              ))
            }
          </div>
          <p className='filmdangchieu'>PHIM ĐANG CHIẾU</p>
          <div className='boxphim l'>
            <div className='bodysaming'>
              {this.props.nowsoon.lsMovieNoWSoon &&
                this.props.nowsoon.lsMovieNoWSoon.now.map((m, q) => {
                  if (q < 3) {
                    return (
                      <div className='left1' key={q}>
                        <div className='handelerimg'>
                          <img src={m.BannerUrl} alt='a' />
                          <div className='hovimg'>
                            <div className='boxbutton'>
                              <div onClick={() => { this.props.IdMovieFunc(m.ApiFilmId, this.state.date) }}>Mua Vé</div>
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
            {/* button */}
            {this.state.display === true ? <>
              <div className='ViewMore'><button onClick={() => this.setState({ display: false })}>XEM THÊM </button></div>
            </>
              : <>
                {/* Hiển thị show full */}
                {this.props.nowsoon.lsMovieNoWSoon &&
                  this.props.nowsoon.lsMovieNoWSoon.now.map((m, o) => {
                    if (o > 3) {
                      return (
                        <div className='left1' key={o}>
                          <div className='handelerimg'>
                            <img src={m.BannerUrl} alt='a' />
                            <div className='hovimg'>
                              <div className='boxbutton'>
                                <div onClick={() => { this.props.IdMovieFunc(m.ApiFilmId, this.state.date) }}>Mua Vé</div>
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
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    NowSoonFunc: (val) => {       //funcion để chạy API
      dispatch({ type: "GetNowSoonSaga", payload: val })
    },
    IdMovieFunc: (apiFim, date) => {
      dispatch({ type: "GetIdMovieSaga", payload: [apiFim, date] })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BoxRightDetail)