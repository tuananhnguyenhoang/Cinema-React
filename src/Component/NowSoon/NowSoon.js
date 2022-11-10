import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import './NowSoon.css'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import PhimDangChieu from '../PhimDangChieu/PhimDangChieu';
import PhimSapChieu from '../PhimSapChieu/PhimSapChieu';

export default class NowSoon extends Component {
    constructor(props) {
        super()
        this.state = {
            display: true
        }
    }
    render() {
        return (
            <div className='NowSoon'>
                <PhimDangChieu />
                <PhimSapChieu />
                <div className='bodyfilm'>
                    <div className="texta">
                        <div onClick={() => { this.setState({ display: true }) }}>PhimDangCHieu</div>/
                        <div onClick={() => { this.setState({ display: false }) }}>PhimSapChieu</div>
                    </div>
                    {
                        this.state.display ? <PhimDangChieu /> : <PhimSapChieu />
                    }

                </div>

            </div>
        )
    }
}
