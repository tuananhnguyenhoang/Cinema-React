import React, { Component } from 'react'
import "./FormFood.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

class FormFood extends Component {
    render() {
        return (
            <div className='body-food'>
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
                <div className='ghe mgb10'><div className='first'>Ghế:</div><div className='final'></div></div>
                <div className='tong mgb10'><div className='first'>Tổng:</div><div className='finaly'>{this.props.totalForm}</div></div>
                <div className='continute'><Link to='/ChooseChair'><button onClick={() => this.props.GettotalPayFunc(this.props.totalForm)}>Tiếp tục </button></Link></div>

            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        UserRegister: state.UserRegister,
        UserLogin: state.UserLogin,
        PayR: state.PayR
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        GettotalPayFunc: (val) => {
            dispatch({ type: "GettotalPay", payload: val })
        },


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormFood)