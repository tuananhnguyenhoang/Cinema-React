import React, { Component } from 'react'
import './Login.css'
import Forgetpass from './Forger-pass/Forgetpass'
import Popup from "reactjs-popup";
import { connect } from 'react-redux'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      "email": "",
      "password": ""
    }
  }
  render() {
    const AddData = (event) => {
      event.preventDefault()
      this.props.GetLoginUserSagaFunc(this.state)
      this.props.GetOutUserFunc(true)
      this.props.SetStatus(true)
    }
    const HandleInput = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
    return (
      <div className='login'>
        <p className='content-login'>Vui lòng đăng nhập trước khi mua vé để tích luỹ điểm, cơ hội nhận thêm nhiều ưu đãi từ chương trình thành viên Galaxy Cinema.</p>
        <input name='email' onChange={(event) => HandleInput(event)} className='email' placeholder='Email' />
        <input name='password' onChange={(event) => HandleInput(event)} className='password' placeholder='Password' />
        <p className='forget-pass'>
          <Popup modal nested trigger={<button>Quên mật khẩu?</button>}>
            <div>
              <Forgetpass />
            </div>
          </Popup> </p>
        <button onClick={(event) => {
          AddData(event)
          this.props.GetOutUserFunc(true)
        }} className='button-login'>ĐĂNG NHẬP</button>
        {this.props.UserLogin.lsUserLogin &&
         this.props.UserLogin.lsUserLogin.status === 404 ? <strong>Enail hoặc Password của bạn bị sai !!! </strong> : ""
        }
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    UserRegister: state.UserRegister,
    UserLogin: state.UserLogin
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    GetLoginUserSagaFunc: (val) => {
      dispatch({ type: "GetLoginUserSaga", payload: { acc: val } })
    },
    GetOutUserFunc: (val) => {
      dispatch({ type: "GetOutLoginUser", payload: val })
    },

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)