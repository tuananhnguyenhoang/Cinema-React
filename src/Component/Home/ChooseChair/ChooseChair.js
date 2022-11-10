import React, { Component } from 'react'
import FormTicket from '../FormTicket/FormTicket';
import './ChooseChair.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import IMGCombo from './imgcombo.png'
import IMGcuoi from './imgcuoi.png'
import { connect } from 'react-redux/es/exports'

class ChooseChair extends Component {
    constructor() {
        super();
        this.state = {
            arrAlpha: ["L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A"],
            arrNum: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"],
            BtnChair: [],
        }
    }
    render() {
        const SetBtnSelect = (btn) => {
            let total = this.props.PayR.CountTicket + 1
            let arr = this.state.BtnChair
            if (arr.length === total) {
                arr = arr.splice(0, total - 1)
            }
            arr.unshift(btn)
            this.setState({
                BtnChair: arr
            }, () =>  this.props.GetseatCodePayFunc(this.state.BtnChair))
        }
        return (
            //LEFT
            <div className='ChooseChair'>
                <div className='.tet_left'><img src='' /></div>
                <div className='.tet_right'></div>
                <div className='ChooseChair-left'>
                    <div className='ChooseChair-left-top'>CHỌN GHẾ</div>
                    <div className='ChooseChair-left-bottom'>
                        <div className='display'>
                            <div className='screen'></div>
                            <div className='seat'>
                                {
                                    this.state.arrAlpha.map((e, i) => {
                                        return <div className='AlSeat ' key={i}>
                                            <div className='arrAlpha pad'>{e}</div>
                                            {
                                                this.state.arrNum.map((e1, i1) => {
                                                    return <button style={{ background: this.state.BtnChair.includes(`${e}-${e1}`) ? '#6feaf6' : '#444451' }} onClick={() => {
                                                       
                                                        SetBtnSelect(`${e}-${e1}`)
                                                    }} className='NumSeat pad'>{e1}</button>
                                                })
                                            }
                                        </div>
                                    }
                                    )
                                }
                            </div>
                        </div>
                        <div className='fourchair'>
                            <div className='fourchair-p'><span className=' NumSeat selected'></span><p>Ghế đang chọn</p></div>
                            <div className='fourchair-p'><span className=' NumSeat occuoied' ></span><p>Ghế đã bán</p></div>
                            <div className='fourchair-p'><span className=' NumSeat can'></span><p>Có thể chọn</p></div>
                            <div className='fourchair-p'><span className=' NumSeat coupor'></span><p>Ghế đôi</p></div>

                        </div>
                    </div>
                </div>
                <FormTicket />
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
export default connect(mapStateToProps, mapDispatchToProps)(ChooseChair)