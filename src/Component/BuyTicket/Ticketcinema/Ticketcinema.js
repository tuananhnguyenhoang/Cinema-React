import React, { Component } from 'react'
import { connect } from 'react-redux/es/exports'
import './Ticketcinema.css'
import Login from '../../LogIn/Login/Login';
import Register from '../../LogIn/Register/Register';
import Popup from "reactjs-popup";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LogInBox from '../../LogIn/LogInBox';

class Ticketcinema extends Component {
  constructor() {
    super();
    var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.state = {
      date: date,
      showtime: "",
      TimeWatch: [],
      idCineplex: "",
      idCinemaApi: "",
      BtnSelect: [],
      BtnCinema: [],
      BtnCineplex: [],
      show: true,
      choosed: date,

    };
  }
  componentDidMount() {
    this.props.CinemaFunc()
  }
  render() {
    const SetBtnSelect = (btn) => {
      let total = 1
      let arr = this.state.BtnSelect

      if (arr.length === total) {
        arr = arr.splice(0, total - 1)
      }

      arr.unshift(btn)
      console.log(arr)
      this.setState({
        BtnSelect: arr
      })
    }
    const SetBtnSelectCineplex = (btn) => {
      let total = 1
      let arr = this.state.BtnCineplex
      if (arr.length === total) {
        arr = arr.splice(0, total - 1)
      }
      arr.unshift(btn)
      console.log(arr)
      this.setState({
        BtnCineplex: arr
      })
    }
    const SetBtnSelectCinema = (btn) => {
      let total = 1
      let arr = this.state.BtnCinema
      if (arr.length === total) {
        arr = arr.splice(0, total - 1)
      }
      arr.unshift(btn)
      console.log(arr)
      this.setState({
        BtnCinema: arr
      })
    }
    function getFormattedDay(dt) {
      var today = new Date(dt)
      var week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
      var day = week[today.getDay()];
      return day;
    }
    function getFormattedDate(dt) {
      var today = new Date(dt)
      var week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
      var monthNames = new Array("  ", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      )
      var day = week[today.getDay()];
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();
      var hour = today.getHours();
      var minu = today.getMinutes();

      if (dd < 10) { dd = '0' + dd }
      if (mm < 10) { mm = '0' + mm }
      if (minu < 10) { minu = '0' + minu }

      return yyyy + '-' + mm + '-' + dd;

    }
    function getFormattedThu(dt) {
      var today = new Date(dt)
      var week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
      var monthNames = new Array("  ", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      )
      var day = week[today.getDay()];
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();
      var hour = today.getHours();
      var minu = today.getMinutes();

      if (dd < 10) { dd = '0' + dd }
      if (mm < 10) { mm = '0' + mm }
      if (minu < 10) { minu = '0' + minu }

      return day + "," + " " + dd + '-' + mm + '-' + yyyy

    }
    var TimeDay = (dt) => {
      var date = new Date(dt)
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? "PM" : "AM"
      hours = hours % 12;
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      return (`${hours}:${minutes} ${ampm}`)
    }
    const CheckMovie = (CinemaId, keyId, dateApi) => {
      this.props.MovieFunc(CinemaId, keyId, dateApi)
      this.setState({
        idCineplex: keyId,
        idCinemaApi: CinemaId,
        showtime: this.state.showtime
      }, () => {
        this.props.GetapiCinemaIdPayFunc(keyId.toString())
        this.props.GetcineplexPayFunc(CinemaId)
        this.props.GetdatePayFunc(this.state.choosed)
      })
    }
    const HandleSelect = (event) => {
      this.props.MovieFunc(this.state.idCinemaApi, this.state.idCineplex, event.target.value)
      this.setState({
        choosed: event.target.value
      })
    }

    return (
      <div className='Ticketcinema'>
        {/* {console.log(this.props.movie.lsMovie)} */}
        <div className='TicketcinemaItem'>
          <div className='TicketcinemaTitle'>
            <p>CHỌN CỤM RẠP</p>
          </div>
          <div className='Ticketcinema-box'>

            {this.props.cinema.lsCinema &&
              this.props.cinema.lsCinema.map((n, i) => {
                return (
                  <div className={
                    ` CurPoi TicketcinemaTitle-CumRap ${this.state.BtnSelect.includes(i) ? 'selectItem' : ''} `
                  }
                    onClick={() => {
                      this.props.CineplexFunc(n.Id)
                      SetBtnSelect(i)
                    }} key={i}>
                    <div className='img'><img src={n.Logo} /></div>
                    <p>{n.Name}</p>
                  </div>

                )
              })
            }
          </div>
        </div>
        <div className='TicketcinemaItem'>
          <div className='TicketcinemaTitle'>
            <p>CHỌN RẠP</p>
          </div>
          <div className='ChooseCineplex'>

            {this.props.cineplex.lsCineplex &&
              this.props.cineplex.lsCineplex.Items.map((n, i) => {
                return (
                  <div key={i} className={`CurPoi row ${this.state.BtnCineplex.includes(i) ? 'selectItem' : ''}`}>
                    <div className='TicketcinemaTitle-Rap' onClick={() => {
                      CheckMovie(n.ApiCinemaId, n.Cineplex, this.state.date)
                      SetBtnSelectCineplex(i)
                      this.props.GetNameCineplexPayFunc(n.Name)
                    }
                    }
                    >
                      <div className='img'><img src={n.Logo} /></div>
                      <p >{n.Name}</p>
                    </div>
                    <div className='add'><p>{n.Address}</p></div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='TicketcinemaItem'>
          <div className='TicketcinemaTitle'>
            <p>CHỌN PHIM</p>
          </div>
          <select onChange={(event) => {
            HandleSelect(event)
          }
          }>
            {
              this.props.movie.lsMovie &&
              this.props.movie.lsMovie.ShowTimes.map((v, i) => {
                return <option key={i} value={getFormattedDate(v)}>{getFormattedDate(v)}</option>
              })
            }
          </select>
          {
            this.props.movie.lsMovie &&
            <div className='ChooseFilm'>
              {
                this.props.movie.lsMovie.Films.map((e, i) => {
                  return (
                    <div className={`CurPoi TicketcinemaTitle-Film ${this.state.BtnCinema.includes(i) ? 'selectItem' : ''} `} onClick={() => {
                      SetBtnSelectCinema(i)
                      this.props.GetapiFilmIdPayFunc(e.ApiFilmId)
                      this.setState({ TimeWatch: e.VersionsCaptions[0].ShowTimes })
                      this.props.GetbannerFilmPayFunc(e.BannerUrl)
                      this.props.GettitleFilmFunc(e.Title)
                      this.props.GetAgeAblePayFunc(e.ApiRatingFormat)
                    }
                    } key={i}>
                      <div className='img'>
                        <img src={e.GraphicUrl} width={"20%"} />
                      </div>
                      <div className='content'>
                        <p className='rating'><span className='span1'>{e.ApiRatingFormat}</span><span className='span2'>{e.Duration}'</span></p>
                        <p className='title'>{e.Title}</p>
                        <p className='apigene'>{e.ApiGenreName}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          }

        </div>
        <div className='TicketcinemaItem'>
          <div className='TicketcinemaTitle'>
            <p>CHỌN SUẤT</p>
          </div>
          {
            this.state.TimeWatch.length > 0 &&
            <div className='detailday'>
              <i>{getFormattedThu(this.state.choosed)} </i>
            </div>
          }
          <div className='ChooseHour'>
            {
              this.state.TimeWatch.map((n, i) => {
                return <div onClick={() => this.props.GettimeFilmPayFunc(n.ShowTimeDuration)} className='CurPoi hour' key={i}>
                  {this.props.UserLogin.lsUserLogin &&
                    this.props.UserLogin.lsUserLogin.status === 200 && this.props.UserLogin.OutLogin === true ?

                    <p><Link to='/Food' >{n.ShowTimeDuration}</Link></p>

                    :

                    <LogInBox />
                  }
                </div>
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    cinema: state.cinema,
    cineplex: state.cineplex,
    movie: state.Movie,
    movieToCinema: state.movieToCinema,
    UserRegister: state.UserRegister,
    UserLogin: state.UserLogin,
    PayR: state.PayR
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    CinemaFunc: (val) => {
      dispatch({ type: "GetCinemaSaga", payload: val })
    },
    CineplexFunc: (keyID) => {
      dispatch({ type: "GetCineplexSaga", payload: keyID })
    },
    MovieFunc: (CinemaId, keyId, dateApi) => {
      dispatch({ type: "GetMovieSaga", payload: { CinemaId: CinemaId, keyId: keyId, dateApi: dateApi } })
    },
    GetcineplexPayFunc: (val) => {
      dispatch({ type: "GetcineplexPay", payload: val })
    },
    GetapiCinemaIdPayFunc: (val) => {
      dispatch({ type: "GetapiCinemaIdPay", payload: val })
    },
    GetapiFilmIdPayFunc: (val) => {
      dispatch({ type: "GetapiFilmIdPay", payload: val })
    },
    GetdatePayFunc: (val) => {
      dispatch({ type: "GetdatePay", payload: val })
    },


    GettimeFilmPayFunc: (val) => {
      dispatch({ type: "GettimeFilmPay", payload: val })
    },
    GettitleFilmFunc: (val) => {
      dispatch({ type: "GettitleFilm", payload: val })
    },
    GetbannerFilmPayFunc: (val) => {
      dispatch({ type: "GetbannerFilmPay", payload: val })
    },
    GetNameCineplexPayFunc: (val) => {
      dispatch({ type: "GetNameCineplexPay", payload: val })
    },
    GetAgeAblePayFunc: (val) => {
      dispatch({ type: "GetAgeAblePay", payload: val })
    },

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Ticketcinema)