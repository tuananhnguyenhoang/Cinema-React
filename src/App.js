import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Component/Home/Home';
import BuyTicket from './Component/BuyTicket/BuyTicket';
import Movie from './Component/Movie/Movie';
import NavUI from './Component/NavUI/Nav';
import Moviegenre from './Component/CinemaBlog/Moviegenre/Moviegenre';
import Actor from './Component/CinemaBlog/Actor/Actor';
import Director from './Component/CinemaBlog/Director/Director';
import MovieReview from './Component/CinemaBlog/MovieReview/MovieReview';
import MovieBlog from './Component/CinemaBlog/MovieBlog/MovieBlog';
import Favorable from './Component/Event/Favorable/Favorable';
import HotMovie from './Component/Event/HotMovie/HotMovie';
import CinemaPrice from './Component/CinemaPrice/CinemaPrice';
import Support from './Component/Support/Support';
import Member from './Component/Member/Member';
import Slider from './Component/Home/Slider/Slider';
import LogIn from './Component/LogIn/LogInBox';
import Footer from './Component/Footer/Footer';
import BoxNav from './Component/BoxNav/BoxNav';
import DetailFilm from './Component/Home/DetailFilm/DetailFilm';
import DetailFilmSoon from './Component/Home/DetailFilm/DetailFilmSoon';
import ChooseChair from './Component/Home/ChooseChair/ChooseChair';
import Payment from './Component/Home/Payment/Payment';
import Food from './Component/Home/Food/Food/Food';
export default function App() {

  return (
    <BrowserRouter>
      <div className='container'>
        <header>
          <Link to="/"><img src='https://www.galaxycine.vn/website/images/galaxy-logo.png' alt='logoGalaxy' /></Link>
          <NavUI />
          <LogIn />
          <p><span>VN</span>| <span>EN</span></p>
        </header>
        <nav>
          <ul>
            <li><Link to="/BuyTicket">Buy Ticket</Link> </li>
            <li className='Movie'>Movie
              <div className='movie'>
                <BoxNav />
              </div>
            </li>
            <li className='blogMain'> Cinema Blog
              <ul className='blog'>
                <li><Link to="/MovieGenre">Movie Genre</Link></li>
                <li><Link to="/Actor">Actor</Link></li>
                <li><Link to="/Director">Director</Link></li>
                <li><Link to="/MovieReview">Movie Review</Link></li>
                <li><Link to="/MovieBlog">Movie Blog</Link></li>
              </ul>
            </li>
            <li className='eventMain'> Event
              <ul className='event'>
                <li><Link to="/Favorable">Favorable</Link></li>
                <li><Link to="/HotMovie">Hot Movie</Link></li>
              </ul>
            </li>
            <li><Link to="/CinemaPrice">Cinema/Price</Link></li>
            <li><Link to="/Support">Support</Link></li>
            <li><Link to="/Member">Member</Link></li>
          </ul>
        </nav>
        {/* <Slider /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/DetailFilm/*' element={<DetailFilm />} />
          <Route path='/DetailFilmSoon/*' element={<DetailFilmSoon/>} />
          <Route path='/BuyTicket/*' element={<BuyTicket />} />
          <Route path='/Movie/*' element={<Movie />} />
          <Route path='/MovieGenre/*' element={<Moviegenre />} />
          <Route path='/Actor/*' element={<Actor />} />
          <Route path='/Director/*' element={<Director />} />
          <Route path='/MovieReview/*' element={<MovieReview />} />
          <Route path='/MovieBlog/*' element={<MovieBlog />} />
          <Route path='/Favorable/*' element={<Favorable />} />
          <Route path='/HotMovie/*' element={<HotMovie />} />
          <Route path='/CinemaPrice/*' element={<CinemaPrice />} />
          <Route path='/Support/*' element={<Support />} />
          <Route path='/Member/*' element={<Member />} />
          <Route path='/ChooseChair' element={<ChooseChair />} />
          <Route path='/Payment' element={<Payment />} />
          <Route path='/Food' element={<Food />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )

}
