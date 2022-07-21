import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./sliderPictur.module.css";

import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import axios from "axios";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingWeekMovies,
  getUpComingMovies,
} from "../../data";

const SliderPicture = ({ title, topic }) => {
  const [sizeMobile, setSizeMobile] = useState(false);
  const [sizeExtra, setSizeExtra] = useState(false);
  const [start, setStart] = useState(false);
  const firstSize = window.innerWidth;

  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!start) {
      if (firstSize < 600) {
        setSizeMobile(true);
        setSizeExtra(false);
      } else if (firstSize > 1500) {
        setSizeMobile(false);
        setSizeExtra(true);
      } else {
        setSizeMobile(false);
        setSizeExtra(false);
      }
    } else {
      window.addEventListener("resize", function () {
        if (this.window.innerWidth < 600) {
          setSizeMobile(true);
          setSizeExtra(false);
        } else if (this.window.innerWidth > 1500) {
          setSizeMobile(false);
          setSizeExtra(true);
        } else {
          setSizeMobile(false);
          setSizeExtra(false);
        }
      });
    }

    setStart(true);
  });

  useEffect(() => {
    let results = null;
    async function getData() {
      if (topic == "popular") {
        results = await getPopularMovies();
      } else if (topic == "nowPlaying") {
        results = await getNowPlayingMovies();
      } else if (topic == "topRated") {
        results = await getTopRatedMovies();
      } else if (topic == "upComing") {
        results = await getUpComingMovies();
      } else if (topic == "trendingWeek") {
        results = await getTrendingWeekMovies();
      }

      setMovies(results);
    }

    getData();
  }, []);

  const aturSlidesPerView = () => {
    if (sizeMobile && !sizeExtra) {
      return 2.5;
    } else if (sizeExtra && !sizeMobile) {
      return 10;
    } else {
      return 8;
    }
  };

  const handleNavigate = (id) => {
    navigate(`../${id}`, { replace: true });
  };

  return (
    <>
      <h3 className={styles.titlePopular}>{title}</h3>
      <Swiper
        slidesPerView={aturSlidesPerView()}
        spaceBetween={0}
        modules={[FreeMode, Pagination]}
      >
        {movies.map((movie, index) => {
          {
            /* console.log(movie); */
          }
          return (
            <SwiperSlide key={index} onClick={() => handleNavigate(movie.id)}>
              {/* <Link to={`${movie.id}`}> */}
              <div className={styles.popularItem}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt=""
                />
              </div>
              {/* </Link> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SliderPicture;
