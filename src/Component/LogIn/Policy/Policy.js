import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Guide from './Guide/Guide';
import Popup from "reactjs-popup";
import Interest from './Interest/Interest';
import './Policy.css'
import Rules from './Rules/Rules';

export default class Policy extends Component {
  render() {
    return (
      <div className='Policy'>

        <div className='MenuPolicy'>
          <h1><Link to="Rules">Rules</Link></h1>
          <h1><Link to="Interest">Interest</Link></h1>
          <h1><Link to="Guide">Guide</Link></h1>
        </div>
        <Routes>
          <Route path='Rules' element={<Rules />} />
          <Route path='Interest' element={<Interest />} />
          <Route path='Guide' element={<Guide />} />
        </Routes>

      </div>

    )
  }
}
