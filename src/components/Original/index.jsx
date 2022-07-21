import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./original.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { getActionMovies } from "../../data";
import { useNavigate } from "react-router-dom";

const Original = ({ title }) => {
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

  const aturSlidesPerView = () => {
    if (sizeMobile && !sizeExtra) {
      return 1;
    } else if (sizeExtra && !sizeMobile) {
      return 10;
    } else {
      return 4;
    }
  };

  useEffect(() => {
    async function getData() {
      const results = await getActionMovies();
      setMovies(results);
    }

    getData();
  }, []);

  const handleNavigate = (id) => {
    navigate(`../${id}`, { replace: true });
  };

  return (
    <>
      <h3 className={styles.titlePopular}>Action</h3>
      <Swiper
        slidesPerView={aturSlidesPerView()}
        spaceBetween={0}
        modules={[FreeMode, Pagination]}
      >
        {movies.map((movie, index) => {
          return (
            <SwiperSlide key={index} onClick={() => handleNavigate(movie.id)}>
              <div className={styles.popularItem}>
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

export default Original;
