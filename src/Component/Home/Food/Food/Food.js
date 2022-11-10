import React, { Component } from 'react'
import FormFood from '../../../FormFood/FormFood'
import './Food.css'
import IMGCombo from './imgcombo.png'
import { connect } from 'react-redux'

class Food extends Component {
    constructor(props) {
        super();
        this.state = {
            countvenguoilon: 0,
            total: 0,
            // countvethanhnien: 0,
            titleTicket: "",
            counticombo1: 0,
            totalFood: 0,
            counticombo2: 0,
            totalFoodCombo2: 0,
            counticomboF1: 0,
            totalcounticomboF1: 0,
            totalForm: 0
            // counticomboF2: 0,
        }
    }

    render() {
        const Congnguoilon = () => {
            this.setState({
                countvenguoilon: Math.max(0, this.state.countvenguoilon + 1),
                total: 80000 * (this.state.countvenguoilon + 1),

            });
        }
        const Trunguoilon = () => {
            this.setState({
                countvenguoilon: Math.max(0, this.state.countvenguoilon - 1),
                total: 80000 * (this.state.countvenguoilon - 1),

            });
        }
        // const Congthanhnien = () => {
        //     this.setState({ countvethanhnien: Math.max(0, this.state.countvethanhnien + 1) });
        // }
        // const Truthanhnien = () => {
        //     this.setState({ countvethanhnien: Math.max(0, this.state.countvethanhnien - 1) });
        // }
        const Congicombo1 = () => {
            this.setState({
                counticombo1: Math.max(0, this.state.counticombo1 + 1),
                totalFood: 99000 * (this.state.counticombo1 + 1),
                titleTicket: "iCombo 1",
            }, () => this.props.GetFoodPayFunc(this.state.titleTicket));
        }
        const Truicombo1 = () => {
            this.setState({
                counticombo1: Math.max(0, this.state.counticombo1 - 1),
                totalFood: 99000 * (this.state.counticombo1 - 1),

            });
        }
        const Congicombo2 = () => {
            this.setState({
                counticombo2: Math.max(0, this.state.counticombo2 + 1),
                totalFoodCombo2: 120000 * (this.state.counticombo2 + 1),
                titleTicket: "iCombo 2",
            }, () => this.props.GetFoodPayFunc(this.state.titleTicket));
        }
        const Truicombo2 = () => {
            this.setState({
                counticombo2: Math.max(0, this.state.counticombo2 - 1),
                totalFoodCombo2: 120000 * (this.state.counticombo2 - 1),

            });
        }
        const CongicomboF1 = () => {
            this.setState({
                counticomboF1: Math.max(0, this.state.counticomboF1 + 1),
                totalcounticomboF1: 139000 * (this.state.counticomboF1 + 1),
                titleTicket: "iCombo F1",
            }, () => this.props.GetFoodPayFunc(this.state.titleTicket));
        }
        const TruicomboF1 = () => {
            this.setState({
                counticomboF1: Math.max(0, this.state.counticomboF1 - 1),
                totalcounticomboF1: 139000 * (this.state.counticomboF1 - 1),

            });
        }
        // const CongicomboF2 = () => {
        //     this.setState({ counticomboF2: Math.max(0, this.state.counticomboF2 + 1) });
        // }
        // const TruicomboF2 = () => {
        //     this.setState({ counticomboF2: Math.max(0, this.state.counticomboF2 - 1) });
        // }

        return (
            <div className='foodmain'>
                <div className='food-left'>
                    <p className='choosefood'>CHỌN VÉ/THỨC ĂN</p>
                    <div className='foodbox'>
                        {/* Loaij ve */}
                        <div className='typeticket'>
                            <div className='type'>Loại vé</div>
                            <div className='amount'><p>Số lượng</p></div>
                            <div className='price'><p>Giá (VND)</p></div>
                            <div className='total'><p>Tổng (VND)</p></div>
                        </div>
                        {/* Ve nguoi lon */}
                        <div className='venguoilon'>
                            <div className='type'>
                                <p className='bol'>Nguoi lon</p>
                                <p>Vé 2D</p>
                            </div>
                            <div className='amount'>
                                <button onClick={() => {
                                    Trunguoilon()
                                    this.props.GetCountPayFunc(this.state.countvenguoilon)
                                }
                                } className='boxdau buttonnone '><div className='dau'><p className='dautrup'>-</p></div></button>
                                <div className=' in input'><div>{this.state.countvenguoilon}</div></div>
                                <button onClick={() => {
                                    Congnguoilon()
                                    this.props.GetCountPayFunc(this.state.countvenguoilon)
                                }
                                } className='boxdau buttonnone'><div className='dau'><p className='daucongp'>+</p></div></button>
                            </div>
                            <div className='price'><p className='pricep'>80000</p></div>
                            <div className='total'><p className='totalp'>{this.state.total}</p></div>
                        </div>

                        {/* Ve thanh vien
                        <div className='venguoilon'>
                            <div className='type'>
                                <p className='bol'>Ve 2D Thanh Vien</p>
                                <p>Vé 2D-Chỉ áp dụng khách hàng thành viên</p>
                            </div>
                            <div className='amount'>
                                <button onClick={Truthanhnien} className='boxdau buttonnone '><div className='dau'><p className='dautrup'>-</p></div></button>
                                <div className='input in'><div>{this.state.countvethanhnien}</div></div>
                                <button onClick={Congthanhnien} className='boxdau buttonnone'><div className='dau'>< p className='daucongp'>+</p></div></button>
                            </div>
                            <div className='price'><p className='pricep'>75.000</p></div>
                            <div className='total'><p className='totalp'>0</p></div>
                        </div> */}
                        {/*  Tong */}
                        <div className='Totalbox'>
                            <div className='Total-left'>
                                <p>Tổng</p>
                            </div>
                            <div className='Total-right'><p>{this.state.total}</p></div>
                        </div>

                        {/* Combo */}
                        <div className='combo'>
                            <div className='combo-combo'><p>Combo</p></div>
                            <div className='combo-amount'><p>Số lượng</p></div>
                            <div className='combo-price'><p>Giá </p></div>
                            <div className='combo-total'><p>Tổng (VND)</p></div>
                        </div>


                        <div className=' iCombo i1'>
                            <div className=' img-combo'>
                                <div className='img-combo-left'><img src={IMGCombo} alt='z' /></div>
                                <div className='img-combo-right'>
                                    <p className='p1'>iCombo 1 Big Extra</p>
                                    <p className='p2'>1 BẮP + 1 NƯỚC 32 Oz(LIPTON/SUỐI/DIET</p>
                                    <p className='p3'>PEPSI)+ 1 SNACK</p>
                                </div>
                            </div>
                            <div className='amount'>
                                <button onClick={Truicombo1} className='boxdau buttonnone '><div className='dau'><p className='dautrup'>-</p></div></button>
                                <div className='input in'><div>{this.state.counticombo1}</div></div>
                                <button onClick={Congicombo1} className='boxdau  buttonnone'><div className='dau'><p className='daucongp'>+</p></div></button>
                            </div>
                            <div className='price'><p className='pricep'>99.000</p></div>
                            <div className='total'><p className='totalp'>{this.state.totalFood}</p></div>
                        </div>
                        <div className=' iCombo i2'>
                            <div className=' img-combo'>
                                <div className='img-combo-left'><img src={IMGCombo} alt='z' /></div>
                                <div className='img-combo-right'>
                                    <p className='p1'>iCombo 2 Big Extra</p>
                                    <p className='p2'>1 BẮP + 2 NƯỚC 32 Oz(LIPTON/SUỐI/DIET</p>
                                    <p className='p3'>PEPSI)+ 1 SNACK</p>
                                </div>
                            </div>
                            <div className='amount'>
                                <button onClick={Truicombo2} className='boxdau buttonnone '><div className='dau'><p className='dautrup'>-</p></div></button>
                                <div className='input in'><div>{this.state.counticombo2}</div></div>
                                <button onClick={Congicombo2} className='boxdau buttonnone'><div className='dau'>< p className='daucongp'>+</p></div></button>
                            </div>
                            <div className='price'><p className='pricep'>120.000</p></div>
                            <div className='total'><p className='totalp'>{this.state.totalFoodCombo2}</p></div>
                        </div>
                        <div className=' iCombo i3'>
                            <div className=' img-combo'>
                                <div className='img-combo-left'><img src={IMGCombo} alt='z' /></div>
                                <div className='img-combo-right'>
                                    <p className='p1'>iCombo Friends 1 Big </p>
                                    <p className='p2'>1 BẮP + 3 NƯỚC 32 Oz(LIPTON/SUỐI/DIET</p>
                                    <p className='p3'>PEPSI)+ 1 SNACK</p>
                                </div>
                            </div>
                            <div className='amount'>
                                <button onClick={TruicomboF1} className='boxdau buttonnone '><div className='dau'><p className='dautrup'>-</p></div></button>
                                <div className='input in'><div>{this.state.counticomboF1}</div></div>
                                <button onClick={CongicomboF1} className='boxdau buttonnone'><div className='dau'>< p className='daucongp'>+</p></div></button>
                            </div>
                            <div className='price'><p className='pricep'>139.000</p></div>
                            <div className='total'><p className='totalp'>{this.state.totalcounticomboF1}</p></div>
                        </div>
                        {/* <div className=' iCombo i4'>
                            <div className=' img-combo'>
                                <div className='img-combo-left'><img src={IMGCombo} alt='z' /></div>
                                <div className='img-combo-right'>
                                    <p className='p1'>iCombo Friends 2 Big </p>
                                    <p className='p2'>2 BẮP + 4 NƯỚC 32 Oz(LIPTON/SUỐI/DIET</p>
                                    <p className='p3'>PEPSI)+ 1 SNACK</p>
                                </div>
                            </div>
                            <div className='amount'>
                                <button onClick={TruicomboF2} className='boxdau buttonnone '><div className='dau'><p className='dautrup'>-</p></div></button>
                                <div className='input in'><div>{this.state.counticomboF2}</div></div>
                                <button onClick={CongicomboF2} className='boxdau buttonnone'><div className='dau'>< p className='daucongp'>+</p></div></button>
                            </div>
                            <div className='price'><p className='pricep'>219.000</p></div>
                            <div className='total'><p className='totalp'>0</p></div>
                        </div> */}
                        <div className='combo-total'>
                            <div className='combo-total-left'>
                                <p>Tổng</p>
                            </div>
                            <div className='combo-total-right'><p>{this.state.totalFood + this.state.totalFoodCombo2 + this.state.totalcounticomboF1}</p></div>
                        </div>

                    </div>
                </div>
                <div className="right">
                    <FormFood totalForm={`${this.state.total + this.state.totalFood + this.state.totalFoodCombo2 + this.state.totalcounticomboF1}VND`} />
                </div>

            </div>
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
        GetCountPayFunc: (val) => {
            dispatch({
                type: "GetCountPay", payload: val
            })
        },
        GetFoodPayFunc: (val) => {
            dispatch({
                type: "GetFoodPay", payload: val
            })
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Food)