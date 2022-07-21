import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./TopList.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
import { getTop10Movies } from "../../data";

const TopList = () => {
  const [sizeMobile, setSizeMobile] = useState(false);
  const [sizeExtra, setSizeExtra] = useState(false);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const [start, setStart] = useState(false);
  const firstSize = window.innerWidth;

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
    async function getData() {
      const results = await getTop10Movies();
      const finalResults = results.slice(0, 10);

      setMovies(finalResults);
    }

    getData();
  }, []);

  const aturSlidesPerView = () => {
    if (sizeMobile && !sizeExtra) {
      return 1.8;
    } else if (sizeExtra && !sizeMobile) {
      return 10;
    } else {
      return 6;
    }
  };

  const handleNavigate = (id) => {
    navigate(`../${id}`, { replace: true });
  };
  return (
    <>
      <h3 className={styles.titlePopular}>Top 10 Indonesia Movies</h3>
      <Swiper
        slidesPerView={aturSlidesPerView()}
        spaceBetween={80}
        modules={[FreeMode, Pagination]}
      >
        {movies.map((movie, index) => {
          return (
            <SwiperSlide key={index} onClick={() => handleNavigate(movie.id)}>
              <div className={styles.popularItem}>
                <div className={styles.numberList}>{index + 1}</div>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt=""
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TopList;
