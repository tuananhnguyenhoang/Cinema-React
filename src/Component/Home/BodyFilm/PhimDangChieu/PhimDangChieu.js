import React, { Component } from 'react'
import './PhimDangChieu.css'
import { connect } from 'react-redux/es/exports'
import { BiRightArrowAlt } from "react-icons/bi";


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
                            this.props.nowsoon.lsMovieNoWSoon.soon.map((m, i) => {
                                if (i < 6) {
                                    return (
                                        <div className='left1' key={i}>
                                            <img src={m.GraphicUrl} alt='a' />
                                            <p className='content-1-1'>{m.Title}</p>
                                            <p className='content-1-2' >{m.TitleEn}</p>
                                        </div>
                                    )
                                }
                            })}
                    </div>
                    {this.state.display === true ? <>
                        <div className='ViewMore'><button onClick={() => this.setState({ display: false })}>XEM THÊM <BiRightArrowAlt className='icon' /></button></div>
                    </>
                        : <>
                            {this.props.nowsoon.lsMovieNoWSoon &&
                                this.props.nowsoon.lsMovieNoWSoon.soon.map((m, i) => {
                                    return (
                                        <div className='left1' key={i}>
                                            <img src={m.GraphicUrl} alt='a' />
                                            <p className='content-1-1'>{m.Title}</p>
                                            <p className='content-1-2'>{m.TitleEn}</p>
                                        </div>
                                    )

                                })}
                        </>
                    }
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

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PhimDangChieu)