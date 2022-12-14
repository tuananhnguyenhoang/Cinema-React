import React, { Component } from 'react'
import './Payment.css'
import { connect } from 'react-redux'
import FormTicket from '../FormTicket/FormTicket';
import FormFood from '../../FormFood/FormFood';
import FormPayment from '../../FormPayMent/FormPayment';

class Payment extends Component {
    constructor() {
        super();
        this.state = {
            "email": "",
            "card": {
                "cardNum": "",
                "CardName": "",
                "exDate": "",
                "cvc": ""
            },
            "ticket": {
                "cineplex": "",
                "apiCinemaId": "",
                "apiFilmId": "",
                "seatCode": "",
                "date": ""
            }
            
        }
    }

    render() {
        const CheckInfoPay = () => {
            this.setState({
                "email": this.props.UserLogin.lsUserLogin.acc.email,
                "card":
                {
                    "cardNum": this.state.card.cardNum,
                    "CardName": this.state.card.CardName,
                    "exDate": this.state.card.exDate,
                    "cvc": this.state.card.cvc
                },
                "ticket": {
                    "cineplex": this.props.PayR.cineplex.toString(),
                    "apiCinemaId": this.props.PayR.apiCinemaId,
                    "apiFilmId": this.props.PayR.apiFilmId,
                    "seatCode": this.props.PayR.seatCode.toString(),
                    "date": this.props.PayR.date
                }
            }, () => {
                this.props.GetPaymentAPISagaFunc(this.state)

            }
            )

        }
        const HandleInput = (event) => {
            this.setState({
                "card": {
                    ...this.state.card,
                    [event.target.name]: event.target.value
                }
            })
        }
        return (
            <div className='payment'>
                <div className='payment-left'>
                    {/* {this.props.UserLogin.lsUserLogin &&
                    this.props.UserLogin.OutLogin === true && this.props.UserLogin.lsUserLogin.status === 200 ? */}

                    <div className='payment-top'>
                        <p>VUI L??NG THANH TO??N</p>
                    </div>
                    <div className='payment-bottom'>
                        <div className='name c'>
                            <div className='w'>H??? v?? T??n</div>
                            <div className='i'>
                                <input name='CardName' onChange={HandleInput} placeholder='H??? v?? T??n ' />
                            </div>
                        </div>
                        {/* <div className='email c'>
                                <div>Email</div>
                                <div className='i'>
                                    <input value={} onChange={HandleInput} placeholder='Email' />
                                </div>
                            </div> */}

                        <div className='xdate c'>
                            <div className='w'>Xdate</div>
                            <div className='i'>
                                <input name='exDate' onChange={HandleInput} placeholder='xdate' />
                            </div>
                        </div>
                        <div className='cvc c'>
                            <div className='w'>CVC</div>
                            <div className='i'>
                                <input name='cvc' onChange={HandleInput} placeholder='CVC' />
                            </div>
                        </div>
                        <div className='cvc c'>
                            <div className='w'>cardNum</div>
                            <div className='i'>
                                <input name='cardNum' onChange={HandleInput} placeholder='cardNum' />
                            </div>
                        </div>
                        <div className='content'>
                            <div className='abc'>X</div>
                            <div className='i'>(*) B???ng vi???c click/ch???m v??o <b>THANH TO??N</b>, b???n ???? x??c nh???n hi???u r?? c??c  <b>Quy ?????nh Giao D???ch Tr???c Tuy???n</b> c???a Galaxy Cinema.
                            </div>
                        </div>
                        <div className='pay'>
                            <div className='w'>Content</div>
                            <button onClick={() => {
                                CheckInfoPay()

                            }} className='i'>Thanh To??n</button> <br />
                        </div>
                        <p style={{textAlign:'center',width:'85%',color:'gray'}}>{
                            this.state.card && this.props.PayR.lsInfoPay  &&  this.props.PayR.lsInfoPay.status === 200 ? "Thanh to??n th??nh c??ng" : "Vui l??ng thanh to??n l???i?"}</p>

                    </div>
                </div>
                <FormPayment />

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
        GetPaymentAPISagaFunc: (pay) => {
            dispatch({ type: "GetPaymentAPISaga", payload: { pay: pay } })
        },
        MovieFunc: (CinemaId, keyId, dateApi) => {
            dispatch({ type: "GetMovieSaga", payload: { CinemaId: CinemaId, keyId: keyId, dateApi: dateApi } })
        },


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Payment)