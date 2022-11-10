import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import './BodyFilm.css'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import PhimSapChieu6 from './PhimSapChieu6/PhimSapChieu6';
import PhimDangChieu6 from './PhimDangChieu6/PhimDangChieu6';

export default class BodyFilm extends Component {
    constructor() {
        super();
        this.state = {
            show: true,
            watch: true,
            left: true,
            right: false

        }
    }
    render() {
        return (
            // <div className='bodyfilm'>
            //     <div className="texta">
            //         <NavLink
            //             className={(navData) => (navData.isActive ? 'active' : 'link')}
            //             to="*"
            //         >
            //             <span className="space"></span><span>PHIM ĐANG CHIẾU</span>
            //         </NavLink>/
            //         <NavLink
            //             className={(navData) => (navData.isActive ? 'active' : 'link')}
            //             to="PhimSapChieu"
            //         >
            //             PHIM SẮP CHIẾU
            //         </NavLink>
            //     </div>
            //     <Routes>
            //         <Route path="*" element={<PhimDangChieu />} />
            //         <Route path="PhimSapChieu" element={<PhimSapChieu />} />
            //     </Routes>

            // </div>
            <div className='bodyfilm'>
                <div className='TitleLog'>
                    <div className='MenuLog'>
                        {this.state.show ?
                            <div className='box-dangchieu'>
                                <h3 className='colClick CurPoi' onClick={() => this.setState({ show: true, left: true, right: false })}>PHIM ĐANG CHIẾU</h3>
                                {this.state.left === true &&
                                    <hr />
                                }
                            </div>
                            : <div className='box-dangchieu'>
                                <h3 className='CurPoi' onClick={() => this.setState({ show: true, left: true, right: false })}>PHIM ĐANG CHIẾU</h3>
                                {this.state.left === true &&
                                    <hr />
                                }
                            </div>
                        }
                        <h3>/</h3>
                        {
                            this.state.show === false ?
                                <div className='box-sapchieu'>
                                    <h3 className='colClick CurPoi' onClick={() => this.setState({ show: false, left: false, right: true })}>PHIM SẮP CHIẾU</h3>
                                    {this.state.right === true &&
                                        <hr />
                                    }
                                </div>
                                :
                                <div className='box-sapchieu'>
                                    <h3 className=' CurPoi' onClick={() => this.setState({ show: false, left: false, right: true })}>PHIM SẮP CHIẾU</h3>
                                    {this.state.right === true &&
                                        <hr />
                                    }
                                </div>
                        }
                    </div>
                    {
                        this.state.show === true ?
                            <div>
                                {
                                    this.state.watch ?
                                        <div className="texta">
                                            <PhimDangChieu6 />

                                        </div> :
                                        <Routes>
                                            <Route path="PhimDangChieu" element={<PhimDangChieu6 />} />
                                        </Routes>
                                }


                            </div>
                            :
                            <div>
                                <div className="texta">
                                    <PhimSapChieu6 />
                                </div>
                                <Routes>
                                    <Route path="PhimSapChieu6" element={<PhimSapChieu6 />} />
                                </Routes>
                            </div>
                    }
                </div>
            </div>
        )
    }
}
