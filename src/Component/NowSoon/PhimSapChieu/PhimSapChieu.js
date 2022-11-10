import React, { Component } from 'react'
import './PhimSapChieu.css'
import { BiRightArrowAlt } from "react-icons/bi";
import { connect } from 'react-redux/es/exports'

class PhimSapChieu extends Component {
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
            <div className='body-phimsapchieu'>
                <div className=' body-box'>
                    <div className='bodysaming'>
                        {this.props.nowsoon.lsMovieNoWSoon &&
                            this.props.nowsoon.lsMovieNoWSoon.soon.map((m, i) => {
                               
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
            </div >)
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
export default connect(mapStateToProps, mapDispatchToProps)(PhimSapChieu)
