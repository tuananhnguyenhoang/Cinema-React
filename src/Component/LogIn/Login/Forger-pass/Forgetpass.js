import React, { Component } from 'react'
import './Forgetpass.css'


export default class Forgetpass extends Component {
  render() {
    return (
      <div className='forgetpass'>
          <span>X</span>
          <p className='content-forget'>QUÊN MẬT KHẨU</p>
          <p className='forget-detail'>Vui lòng cung cấp email đăng 
              nhập, chúng tôi sẽ gửi link kích hoạt cho bạn.</p>
          <input className='forget-email' placeholder='Email'/>
          {/* <div className='capcha'>.</div> */}
          <button className='resert-pass'>CẤP LẠI MẬT KHẨU</button>
      </div>
    )
  }
}
