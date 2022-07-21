import React, { useEffect, useState } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import styles from "./SelectedMovie.module.css";
import axios from "axios";

import SliderPicture from "../../components/SliderPicture";
import Original from "../../components/Original";
import { useParams } from "react-router-dom";

import InfoIcon from "@mui/icons-material/Info";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

const SelectedMovie = () => {
  const [play, setPlay] = useState(false);
  const { id } = useParams();
  const [selectedMovie, setSelectedMovie] = useState({
    id: 1,
    title: "",
    overview: "",
    img: "",
  });

  useEffect(() => {
    setPlay(false);
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=5ee726377bf06ea70e2eb78c6e885d82`
      )
      //res.data.id
      //res.data.title
      // res.data.overview
      // res.data.backdrop_path
      .then((res) => {
        const dataMovie = {
          id: res.data.id,
          title: res.data.title,
          overview: res.data.overview,
          img: res.data.backdrop_path,
        };

        setSelectedMovie(dataMovie);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <Box sx={{ marginTop: 10 }}>
        <Box sx={{ position: "relative" }}>
          <Box
            component={play ? "iframe" : "img"}
            src={
              play
                ? "https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"
                : `https://image.tmdb.org/t/p/w500/${selectedMovie.img}`
            }
            autoplay={1}
            //   src="https://image.tmdb.org/t/p/w500/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg"
            // src="https://www.youtube.com/embed/tgbNymZ7vqY"
            sx={{ width: "100%", height: { xs: "200px", md: "500px" } }}
          ></Box>
          <Box
            sx={{
              backgroundColor: "#b9b9b9cc",
              position: "absolute",
              top: "20%",
              left: "5%",
              padding: "10px",
              borderRadius: "6px",
            }}
            className={
              play ? [styles.hideDisplayInfo] : [styles.showDisplayInfo]
            }
          >
            <Typography
              sx={{
                width: { xs: "200px", md: "450px" },
                height: "40px",
                overflow: "hidden",
                fontSize: { xs: 12, md: 20 },
                fontWeight: "bold",
              }}
            >
              {selectedMovie.title}
            </Typography>
            <Typography
              sx={{
                width: { xs: "200px", md: "450px" },
                fontSize: { xs: 10, md: 18 },
                height: { xs: "50px", md: "220px" },
                overflow: "hidden",
                marginBottom: "10px",
              }}
            >
              {selectedMovie.overview}
            </Typography>
            <Button
              startIcon={<PlayCircleFilledWhiteIcon />}
              variant="contained"
              color="inherit"
              sx={{
                backgroundColor: "#fff",
                color: "black",
                fontSize: { xs: ".5em", sm: "1em" },
                width: { xs: "50px", sm: "200px" },
              }}
              onClick={() => setPlay(!play)}
            >
              Play
            </Button>
            <Button
              startIcon={<InfoIcon />}
              variant="contained"
              color="inherit"
              sx={{
                backgroundColor: "#fff",
                color: "black",
                left: "10%",
                fontSize: { xs: ".5em", sm: "1em" },
                width: { xs: "100px", sm: "200px" },
              }}
            >
              Information
            </Button>
          </Box>
        </Box>

        <Container sx={{ color: "#fff", p: 4 }}>
          <Typography variant="h4" sx={{ textDecoration: "underline" }}>
            Description
          </Typography>
          <Typography variant="p">
            Professor Albus Dumbledore knows the powerful, dark wizard Gellert
            Grindelwald is moving to seize control of the wizarding world.
            Unable to stop him alone, he entrusts magizoologist Newt Scamander
            to lead an intrepid team of wizards and witches. They soon encounter
            an array of old and new beasts as they clash with Grindelwald's
            growing legion of followers.
          </Typography>
        </Container>
        <Box sx={{ padding: "0px 30px" }}>
          <SliderPicture topic="popular" title="Popular" size="small" />
          <SliderPicture
            topic="nowPlaying"
            title="Diputar Sekarang"
            size="small"
          />
          <SliderPicture topic="topRated" title="Film Terbaik" size="small" />
          <Original />
        </Box>
      </Box>
    </>
  );
};

export default SelectedMovie;
