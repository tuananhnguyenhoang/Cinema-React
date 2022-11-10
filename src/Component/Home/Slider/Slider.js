import React, { useEffect, useState } from 'react'
import './Slider.css'
import Popup from "reactjs-popup";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { AiFillPlayCircle } from "react-icons/ai";
import { connect } from 'react-redux/es/exports'
const delay = 20000;
// const delayArr = 1000;

function SliderCopy(props) {
  const [index, setIndex] = React.useState(0);
  const [display, setDisplay] = React.useState(false);

  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === props.nowsoon.lsMovieNoWSoon.now.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  var Arrow = () => {
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === props.nowsoon.lsMovieNoWSoon.now.length - 1 ? 0 : prevIndex + 1
        ),
      0);
  }
  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        <div className='slide'>

          {props.nowsoon.lsMovieNoWSoon &&
            props.nowsoon.lsMovieNoWSoon.now.map((e, index) => (
              <div className='slideDetail' key={index}>
                {
                  console.log(e.TrailerUrl.slice(-11))
                }
                {/* {
                  e.icon ? <h1 className='playIcon' onClick={() => setDisplay(!display)}><AiFillPlayCircle /></h1> : ""
                } */}
                {/* {
                  e.vid === display && e.icon ? <div className='popupVid'>
                    <h1>{e.alt}</h1>
                    <iframe width="100%" height="300px" src={e.linkVideo}>
                    </iframe>
                  </div> : ""
                } */}
                <Popup modal closeOnDocumentClick nested trigger={<h1 className='playIcon'><AiFillPlayCircle /></h1>}>
                  {close => (

                    <iframe height={'600px'} width={'100%'} src={`https://www.youtube.com/embed/${e.TrailerUrl.slice(-11)}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  )
                  }
                </Popup>

                <img width={'100%'} src={e.BannerUrl} />
              </div>
            ))}
        </div>
      </div>
      <div className="slideshowDots">
        {props.nowsoon.lsMovieNoWSoon &&
          props.nowsoon.lsMovieNoWSoon.now.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
      </div>
      <div className='left' onClick={Arrow}>
        <h1><FiChevronsLeft /></h1>
      </div>
      <div className='right' onClick={Arrow}>
        <h1><FiChevronsRight /></h1>
      </div>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    nowsoon: state.nowsoon
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    NowSoonFunc: (val) => {
      dispatch({ type: "GetNowSoonSaga", payload: val })
    },

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SliderCopy)
