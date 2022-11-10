import React, { Component } from 'react'
import { connect } from 'react-redux/es/exports'
import './TicketMovie.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LogInBox from '../../LogIn/LogInBox';

class Ticketmovie extends Component {
  constructor() {
    super();
    var today = new Date(),
      DateDay = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.state = {
      FilmIDSt: null,
      DateApiMovieSt: DateDay,
      movietoCineplex: null,
      TimeShow: null,
      idCineplexChoose: null,
      show: true,
      BtnSelect: [],
      BtnCinema: [],
      BtnCineplex: [],
      choosed: DateDay,
    }

  }
  componentDidMount() {
    this.props.NowSoonFunc()
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
    const CheckMovie = (FilmID, DateApiMovie, idCineplexChoose) => {
      this.props.dataMovieToCinemaFuncSaga(FilmID, DateApiMovie)
      this.props.GetdatePayFunc(this.state.DateApiMovieSt)
      this.setState({
        FilmIDSt: FilmID,
        idCineplexChoose: idCineplexChoose
      })
    }
    const HandleSelect = (event) => {
      this.setState({
        DateApiMovieSt: event.target.value
      }, () => this.props.dataMovieToCinemaFuncSaga(this.state.FilmIDSt, event.target.value))
      this.setState({ choosed: event.target.value })
    }
    return (
      <div className='Ticketmovie'>
        <div className='TicketmovieItem'>
          <div className='TicketmovieTitle'>
            <p>CHỌN PHIM</p>
          </div>
          <div className='ChooseFilm'>
            {this.props.nowsoon.lsMovieNoWSoon &&
              this.props.nowsoon.lsMovieNoWSoon.now.map((m, i) => {
                return (
                  <div className={`CurPoi TicketmovieTitle-Film ${this.state.BtnSelect.includes(i) ? 'selectItem' : ''}`} key={i} onClick={() => {
                    SetBtnSelect(i)
                    CheckMovie(m.ApiFilmId, this.state.DateApiMovieSt)
                    this.props.GetapiFilmIdPayFunc(m.ApiFilmId)
                    this.props.GettitleFilmFunc(m.Title)
                    this.props.GetbannerFilmPayFunc(m.BannerUrl)
                    this.props.GetAgeAblePayFunc(m.ApiRatingFormat)
                  }
                  } >
                    <div className='img'>
                      <img src={m.GraphicUrl} width={"20%"} />
                    </div>
                    <div className='content'>
                      <p className='rating'><span className='span1'>{m.ApiRatingFormat}</span><span className='span2'>{m.Duration}'</span></p>
                      <p className='title'>{m.Title}</p>
                      <p className='apigene'>{m.ApiGenreName}</p>
                    </div>
                  </div>
                )
              })}
          </div>

        </div>


        <div className='TicketmovieItem'>
          <div className='TicketmovieTitle'>
            <p>CHỌN CỤM RẠP</p>
          </div>
          <select onChange={(event) => {
            HandleSelect(event)

          }}>
            {this.props.movieToCinema.lsdataMovieToCinema &&
              this.props.movieToCinema.lsdataMovieToCinema.ShowTimes.map((e, i) => {
                return <option key={i} value={getFormattedDate(e)}>{getFormattedDate(e)}</option>
              })
            }
          </select>
          {this.props.movieToCinema.lsdataMovieToCinema &&
            <div className='Ticketmovie-box'>
              {
                this.props.movieToCinema.lsdataMovieToCinema.Cineplexs.map((e, i) =>
                  <div className={`CurPoi TicketmovieTitle-CumRap ${this.state.BtnCinema.includes(i) ? 'selectItem' : ''}`} onClick={() => {
                    this.props.dataMovieToCinemaFuncSaga(this.state.FilmIDSt, this.state.DateApiMovieSt)
                    this.setState({ idCineplexChoose: e.Id })
                    this.props.GetcineplexPayFunc(e.Id)
                    SetBtnSelectCinema(i)
                   
                  }

                  } key={i}  >
                    <div className='img'><img src={e.Logo} /></div>
                    <p>{e.Name}</p>
                  </div>
                )
              }
            </div>
          }
        </div>


        <div className='TicketmovieItem'>
          <div className='TicketmovieTitle'>
            <p>CHỌN RẠP</p>
          </div>

          <div className='ChooseCineplex'>
            {this.props.movieToCinema.lsdataMovieToCinema &&
              this.props.movieToCinema.lsdataMovieToCinema.Cinemas.Items.map((e, i) => {
                if (e.Cineplex === this.state.idCineplexChoose) {
                  return (
                    <div key={i} className={`CurPoi row ${this.state.BtnCineplex.includes(i) ? 'selectItem' : ''} `} onClick={() => {
                      this.props.GetapiCinemaIdPayFunc(e.ApiCinemaId)
                      SetBtnSelectCineplex(i)
                      this.setState({ TimeShow: e.VersionsCaptions[0].ShowTimes })
                      this.props.GetNameCineplexPayFunc(e.Name)
                    }}>
                      <div className={`TicketmovieTitle-Rap  `} key={i} >
                        <div className='img'><img src={e.Logo} /></div>
                        <p>{e.Name}</p>
                      </div>
                      <div className='add'>
                        <p>{e.Address}</p>
                      </div>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
        <div className='TicketmovieItem'>
          <div className='TicketmovieTitle'>
            <p>CHỌN XUẤT</p>
          </div>
          {
            this.props.movieToCinema.lsdataMovieToCinema &&
            <div className='detailday'>
              <i>{getFormattedThu(this.state.choosed)} </i>
            </div>
          }
          <div className='ChooseHour'>
            {this.state.TimeShow &&
              this.state.TimeShow.map((e, i) => {
                return (
                  <div className='CurPoi hour' key={i}>
                    {this.props.UserLogin.lsUserLogin &&
                      this.props.UserLogin.lsUserLogin.status === 200 && this.props.UserLogin.OutLogin === true ?
                      <p onClick={() => this.props.GettimeFilmPayFunc(e.ShowTimeDuration)}><Link to='/Food' >{e.ShowTimeDuration}</Link></p>
                      :

                      <LogInBox />
                    }
                  </div>
                )
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
    nowsoon: state.nowsoon,
    movieToCinema: state.movieToCinema,
    UserRegister: state.UserRegister,
    UserLogin: state.UserLogin
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    NowSoonFunc: (val) => {
      dispatch({ type: "GetNowSoonSaga", payload: val })
    },
    dataMovieToCinemaFuncSaga: (FilmID, DateApiMovie) => {
      dispatch({ type: "GetdataMovieToCinemaSaga", payload: { FilmID: FilmID, DateApiMovie: DateApiMovie } })
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
export default connect(mapStateToProps, mapDispatchToProps)(Ticketmovie)