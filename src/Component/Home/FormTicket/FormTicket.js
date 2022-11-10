import React, { Component } from 'react'
import "./FormTicket.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

class FormTicket extends Component {
  render() {
    return (
      <div className='body-formpay'>
        <div className='form-img'>
          <div className='img' >
            <img alt='a' src={this.props.PayR.bannerFilm} />
          </div>
        </div>
        <div className='nameFilm'>{this.props.PayR.titleFilm}</div>
        {/* <div className='nameFilmEn'>BLACK ADAM</div> */}
        <div className='age'>
          <div className='age-left'>{this.props.PayR.AgeAble}</div>
          <div className='age-right'>(*)Phim chỉ dành cho khán giả từ {this.props.PayR.AgeAble}</div>
        </div>
        <div className='rap mgb10'><div className='first'>Rạp:</div><div className='final'>{this.props.PayR.NameCineplex}</div></div>
        <div className='ngaychieu mgb10'><div className='first'>Ngày chiếu:</div><div className='final'>{this.props.PayR.date}</div></div>
        <div className='thoigian mgb10'><div className='first'>Thời gian:</div><div className='final'>{this.props.PayR.timeFilmPay}</div></div>
        <div className='ghe mgb10'><div className='first'>Ghế:</div><div className='final'>{this.props.PayR.seatCode.join(',')}</div></div>
        <div className='tong mgb10'><div className='first'>Tổng:</div><div className='finaly'>{this.props.PayR.totalPay}</div></div>
        <div className='continute'> <Link to="/Payment"><button>Tiếp tục</button></Link></div>
        {
          console.log(this.props.PayR)
        }
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    nowsoon: state.nowsoon,
    movieToCinema: state.movieToCinema,
    UserRegister: state.UserRegister,
    UserLogin: state.UserLogin,
    PayR: state.PayR
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    GetseatCodePayFunc: (val) => {
      dispatch({ type: "GetseatCodePay", payload: val })
    },




  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormTicket)