import React, { Component } from 'react'
import NavSearch from './NavSearch/NavSearch'
import './Nav.css'
export default class NavUI extends Component {
    render() {
        return (
            <div className='NavInput'>
                <NavSearch />
            </div>
        )
    }
}
