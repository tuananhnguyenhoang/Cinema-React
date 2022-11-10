import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Popup from "reactjs-popup";
import Policy from '../Policy/Policy';
import './Register.css'
import { connect } from 'react-redux'
class Register extends Component {
    constructor() {
        super();
        this.state = {
            nameLogin: {
                "email": "",
                "password": "",
            },
            LogIn: true
        }

    }

    render() {
        const AddData = (event) => {
            event.preventDefault()
            this.props.GetRegisterUserFunc(this.state.nameLogin, this.props.SetShow)
        }
        const HandleInput = (event) => {
            this.setState({
                nameLogin: {
                    ...this.state.nameLogin,
                    [event.target.name]: event.target.value
                }
            })
        }
        return (
            <form className='RegisterBox'>
                <div className='RegisterBoxItem'>
                    <input name='email' onChange={(event) => HandleInput(event)} placeholder='Email' />
                    <input name='password' onChange={(event) => HandleInput(event)} placeholder='Mật khẩu' />
                    {/* <input placeholder='Xác nhận mật khẩu ' /> */}
                </div>

                <p className='RegisterBoxItem-bottom'><i className='toi'>Tôi đã đọc và đồng ý với</i>
                    <i className='pop'>
                        <Popup
                            trigger={<p className="button"> CHÍNH SÁCH </p>}
                            modal
                            nested>
                            {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>
                                        &times;
                                    </button>
                                    <div className="header"> Modal Title </div>
                                    <div className="content">
                                        <Policy />
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </i>
                    <i className='cua'> của chương   </i></p>
                    <p>trình.</p>
                <button onClick={(event) => AddData(event)} className='RegisterBoxItemBtn'>REGISTER</button>
                {this.props.UserRegister.lsRegisterUser &&
                    this.props.UserRegister.lsRegisterUser.status === 404 ? <strong>Vui lòng đăng ký lại tài khoản khác</strong> : ""
                }
            </form>

        )

    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        User: state.User,
        UserRegister: state.UserRegister,
        UserLogin: state.UserLogin,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        GetRegisterUserFunc: (val, act) => {
            dispatch({
                type: "GetRegisterUserSaga", payload: {
                    acc: val,
                    act: act
                }
            })
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)