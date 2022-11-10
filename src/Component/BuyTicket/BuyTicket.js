import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link
} from "react-router-dom";
import Ticketcinema from './Ticketcinema/Ticketcinema';
import Ticketmovie from './Ticketmovie/Ticketmovie';
import './BuyTicket.css'
export default class BuyTicket extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    }
  }
  render() {

    return (
      <div className='BuyTicket'>
        <div className='MenuBuyTicket'>
          {/* <h1><Link to="Ticketcinema" className='active'>Ticketcinema</Link></h1>
          <h1>/</h1>
          <h1><Link to="Ticketmovie">Ticketmovie</Link></h1> */}

          {
            this.state.show ?
              <div className='box-cinema'>
                <h1 className='colBuyTicket CurPoi' onClick={() => this.setState({ show: true, left: true, right: false })}>Ticketcinema</h1>
                {this.state.left === true &&
                  <hr />
                }
              </div>
              :
              <div className='box-cinema'>
                <h1 className=' CurPoi' onClick={() => this.setState({ show: true, left: true, right: false })}>Ticketcinema</h1>
                {this.state.left === true &&
                  <hr />
                }
              </div>
          }
          {
            this.state.show === false ?
              <div className='box-movie'>
                <h1 className='colBuyTicket CurPoi' onClick={() => this.setState({ show: false, left: false, right: true })}>Ticketmovie</h1>
                {this.state.right === true &&
                  <hr />
                }
              </div>
              :
              <div className='box-movie'>
                <h1 className=' CurPoi' onClick={() => this.setState({ show: false, left: false, right: true })}>Ticketmovie</h1>
                {this.state.right === true &&
                  <hr />
                }
              </div>
          }

        </div>
        {
          this.state.show ? <Ticketcinema /> : <Ticketmovie />
        }
      </div>
    )
  }
}

