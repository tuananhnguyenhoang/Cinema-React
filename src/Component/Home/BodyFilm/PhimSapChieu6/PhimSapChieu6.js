import React, { Component } from 'react'
import './PhimSapChieu6.css'
// import Popup from "reactjs-popup";
// import { BiRightArrowAlt } from "react-icons/bi";
import { connect } from 'react-redux/es/exports'

import {
  // BrowserRouter,
  // Routes,
  // Route,
  Link,
} from "react-router-dom";

class PhimSapChieu6 extends Component {
  constructor() {
    super();
    this.state = {
      display: true,
      obdetail: null,
      pop: false,
    }
  }
  componentDidMount() {
    this.props.NowSoonFunc()
  }
  render() {

    return (
      <div className='body-phimsapchieu'>
        <div className=' body-box'>
          <div className='bodysaming'>
            {this.props.nowsoon.lsMovieNoWSoon.soon &&
              this.props.nowsoon.lsMovieNoWSoon.soon.map((m, i) => {
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
                      <div className='content-1-3'>
                        <span className='age'>{m.ApiRatingFormat}</span>
                        <span className='minute'>{m.Duration}'</span>
                      </div>
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
    IdMovieFuncSoon: (apiFim) => {
      dispatch({ type: "GetIdMovieSagaSoon", payload: apiFim })
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PhimSapChieu6)
