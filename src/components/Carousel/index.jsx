import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
import { useNavigate } from "react-router-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { getTop10Movies } from "../../data";

const Carousell = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const results = await getTop10Movies();
      const finalResults = results.slice(10, 15);

      setMovies(finalResults);
    }

    getData();
  }, []);

  const handleNavigate = (id) => {
    navigate(`../${id}`, { replace: true });
  };
  return (
    <div style={{ marginTop: "82px" }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={-90}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        autoplay
      >
        {movies.map((movie, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="item-1">
                <div className="desc">
                  <h1
                    onClick={() => handleNavigate(movie.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {movie.title}
                  </h1>
                  <h4>Star World - English - Drama</h4>
                  <p>{movie.overview}</p>
                </div>
                <div className="thumb">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt=""
                    onClick={() => handleNavigate(movie.id)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousell;
