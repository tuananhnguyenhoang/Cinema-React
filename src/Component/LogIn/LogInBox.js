import React, { useState, useEffect } from 'react'
import Popup from "reactjs-popup";
import { connect } from 'react-redux'

import Register from './Register/Register';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from '../LogIn/Login/Login'
import './LogInBox.css'
function LogInBox(props) {
    const [show, SetShow] = useState(true)
    const [statusState, SetStatus] = useState(true)
    // useEffect(()=> {
    //     props.dispatch({type:"GetRegisterUserSaga",payload:() => SetShow(true)});
    // },[show])
    return (
        <div >
               
            {
                props.UserLogin.lsUserLogin && props.UserLogin.lsUserLogin.status === 200 && props.UserLogin.OutLogin === true ?
                    <div className="menu">
                        <Popup
                            trigger={<div className="menu-item">{props.UserLogin.lsUserLogin.acc.email}</div>}
                            position="bottom center"
                            on="hover"
                            closeOnDocumentClick
                            mouseLeaveDelay={300}
                            mouseEnterDelay={0}
                            contentStyle={{ padding: '0px', border: 'none' }}
                            arrow={false}
                        >
                            <div className="menu">
                                <div className="menu-item" onClick={() => props.GetOutUserFunc(false)} > thoát</div>
                            </div>
                        </Popup>
                    </div>
                    :
                    <Popup modal closeOnDocumentClick nested trigger={<p className='loginpox'>Đăng nhập</p>}>
                        {close => (
                            <div className='BoxLog'>
                                <div className='TitleLog'>
                                    <div className='MenuLog'>
                                        {show === true ?
                                            <h1 className='colClick' onClick={() => SetShow(true)}>LOGIN</h1>
                                            : <h1 onClick={() => SetShow(true)}>LOGIN</h1>
                                        }
                                        <h1>/</h1>
                                        {
                                            show === false ?
                                                <h1 className='colClick' onClick={() => SetShow(false)} >REGISTER</h1>
                                                :
                                                <h1 onClick={() => SetShow(false)} >REGISTER</h1>
                                        }
                                    </div>
                                    {
                                        show === true ?
                                            <div>
                                                <Login SetStatus={SetStatus} />
                                            </div>
                                            :
                                            <div>
                                                <Register SetShow={SetShow} />
                                            </div>
                                    }
                                </div>
                                {
                                    console.log(show)
                                }
                            </div>)
                        }
                    </Popup>
                    
            }

        </div>
    )

}
const mapStateToProps = (state, ownProps) => {
    return {
        UserRegister: state.UserRegister,
        UserLogin: state.UserLogin
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        GetRegisterUserFunc: (val) => {
            dispatch({ type: "GetRegisterUserSaga", payload: val })
        },
        GetOutUserFunc: (val) => {
            dispatch({ type: "GetOutLoginUser", payload: val })
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LogInBox)