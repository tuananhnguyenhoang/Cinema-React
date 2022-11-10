import React, { Component } from 'react'
import BodyFilm from './BodyFilm/BodyFilm'
import ChooseChair from './ChooseChair/ChooseChair'
import DetailCinema from './DetailCinema/DetailCinema'
import DetailFilm from './DetailFilm/DetailFilm'
import Food from './Food/Food/Food'
import './Home.css'
import Payment from './Payment/Payment'
import SliderCopy from './Slider/Slider'

export default class Home extends Component {
  render() {
    return (
      <div className='homemain'>
       
        <BodyFilm />
        {/* <ChooseChair /> */}
        <DetailCinema />
        {/* <DetailFilm /> */}
        {/* <Food/> */}
        {/* <Payment/> */}
      </div>
    )
  }
}
