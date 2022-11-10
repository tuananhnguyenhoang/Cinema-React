import React, { Component } from 'react'
import './Footer.css'
import { BiChevronsRight } from "react-icons/bi";
import IMG from './dathongbao.png'
import { AiOutlineFacebook } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { FaGooglePlay } from "react-icons/fa";



export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='top-footer'>
            <div className='top-box1 box'>
                <div className='anydiv h1'><div className='pox'></div>GIỚI THIỆU</div>
                <div className='anydiv a'><BiChevronsRight />VỀ CHÚNG TÔI</div>
                <div className='anydiv a'><BiChevronsRight />THỎA THUẬN SỬ DỤNG</div>
                <div className='anydiv a'><BiChevronsRight />QUY CHẾ HOẠT ĐỘNG</div>
                <div className='anydiv a'><BiChevronsRight />CHÍNH SÁCH BẢO MẬT</div>
            </div>
            <div className='top-box2 box'>
                <div className='anydiv h1' ><div className='pox'></div>GÓC ĐIỆN ẢNH</div>
                <div className='anydiv a'><BiChevronsRight />THỂ LOẠI PHIM</div>
                <div className='anydiv a'><BiChevronsRight />BÌNH LUẬN PHIM</div>
                <div className='anydiv a'><BiChevronsRight />BLOG ĐIỆN ẢNH</div>
                <div className='anydiv a'><BiChevronsRight />PHIM HAY THÁNG</div>
            </div>
            <div className='top-box3 box'>
                <div className='anydiv h1'><div className='pox'></div>HỖ TRỢ</div>
                <div className='anydiv a'><BiChevronsRight />GÓP Ý</div>
                <div className='anydiv a'><BiChevronsRight />SALE & SERVICES</div>
                <div className='anydiv a'><BiChevronsRight />RẠP / GIÁ VÉ</div>
                <div className='anydiv a'><BiChevronsRight />TUYỂN DỤNG</div>
            </div>
            <div className='top-box4 '>
                <div className='anydiv h1'><div className='pox'></div>KẾT NỐI GALAXY CINEMA</div>
                <div className='anydiv a'><AiOutlineFacebook className='fb' /><BsYoutube className='youtobe'/><FiInstagram className='instagram'/></div>
                <div className='anydiv  h1'><div className='pox'></div>THỎA THUẬN SỬ DỤNG</div>
                <div className='anydiv a'><AiFillApple className='apple'/><FaGooglePlay className='googleplay'/></div>
            </div>
            
            <div className='top-box5 '><img src={IMG} width={"10%"} alt="a"/></div>
        </div>
        <div className='bottom-footer'>
            <img src="	https://www.galaxycine.vn/website/images/galaxy-logo-footer.png"  alt='img' />
            <p>Công Ty Cổ Phần Phim Thiên Ngân, Tầng 3, Toà Nhà Bitexco Nam Long, 63A Võ Văn Tần, P. Võ Thị Sáu, Quận 3, Tp. Hồ Chí Minh</p>
        </div>
      </div>
    )
  }
}
