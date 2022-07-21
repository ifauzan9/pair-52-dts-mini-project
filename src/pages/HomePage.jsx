// import {
//   AppBar,
//   Box,
//   Button,
//   Container,
//   IconButton,
//   Typography,
// } from "@mui/material";
import React from "react";
import Carousel from "../components/Carousel";
import { Box } from "@mui/material";
import SliderPicture from "../components/SliderPicture";
import Original from "../components/Original";
import TopList from "../components/TopList/TopList";

const HomePage = () => {
  return (
    <>
      {/* Carousel */}
      <Carousel />
      <Box sx={{ padding: "0px 30px" }}>
        <SliderPicture topic="popular" title="Popular" size="small" />
        <SliderPicture
          topic="nowPlaying"
          title="Diputar Sekarang"
          size="small"
        />
        <SliderPicture topic="topRated" title="Film Terbaik" size="small" />
        <Original />
        <TopList />
        <SliderPicture topic="upComing" title="Segera terbit" size="small" />
        <SliderPicture
          topic="trendingWeek"
          title="Trending Minggu Ini"
          size="small"
        />
      </Box>
    </>
  );
};

export default HomePage;
