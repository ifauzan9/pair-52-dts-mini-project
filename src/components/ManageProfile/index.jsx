import React, { useState, useEffect } from "react";
import styles from "./ManageProfile.module.css";

import logoNetflix from "../../assets/icons/logo-netflix.svg";
import profile1 from "../../assets/image/profile-1.png";
import profile2 from "../../assets/image/profile-2.png";
import profile3 from "../../assets/image/profile-3.png";
import profile4 from "../../assets/image/profile-4.png";
import profileAdd from "../../assets/image/profile-add.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Link, Navigate } from "react-router-dom";
import { Button } from "@mui/material";

const ManageProfile = () => {
  const [sizeMobile, setSizeMobile] = useState(false);
  const [sizeExtra, setSizeExtra] = useState(false);
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
      return 5;
    } else {
      return 5;
    }
  };

  return (
    <>
      <div className={styles.manageContainer}>
        <div className={styles.manageLogo}>
          <img src={logoNetflix} alt="logo netflix" />
        </div>
        <div className={styles.profilesContainer}>
          <h2 className={styles.title}>Who's Watching?</h2>
          <Swiper
            slidesPerView={aturSlidesPerView()}
            spaceBetween={-50}
            loop={false}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={styles.mySwiper}
            autoplay={{
              delay: 5000,
            }}
          >
            <SwiperSlide>
              <Link to="/login">
                <div className={styles.item}>
                  <img src={profile1} alt="" />
                  <p>Murat</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/login">
                <div className={styles.item}>
                  <img src={profile2} alt="" />
                  <p>Umut</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/login">
                <div className={styles.item}>
                  <img src={profile3} alt="" />
                  <p>Kemal</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/login">
                <div className={styles.item}>
                  <img src={profile4} alt="" />
                  <p>Cocuk</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/login">
                <div className={styles.item}>
                  <img src={profileAdd} alt="" />
                  <p>200 x 200</p>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
          <Button variant="outlined" size="large">
            Manage Profile
          </Button>
          <Link to="/" style={{ marginLeft: "20px" }}>
            <Button variant="outlined" size="large">
              Home
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ManageProfile;
