import { Box, Container, Typography, Button } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          p: { xs: 5, md: 10 },
          color: "#fff",
          display: "flex",
          justifyContent: { xs: "none", md: "space-around" },
        }}
      >
        <Box>
          <Typography variant="body1" component="a">
            Audio and Subtitles
          </Typography>
          <Typography variant="body1">Media Center</Typography>
          <Typography variant="body1">Security</Typography>
          <Typography variant="body1">Contact us</Typography>
          <Button sx={{ border: "1px solid #fff", color: "#fff" }}>
            Service Code
          </Button>
          <Typography variant="body1">
            c 2-22 Movies, All Right Reserved
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Typography variant="body1" component="a">
            Audio Description
          </Typography>
          <Typography variant="body1">Investor Relations</Typography>
          <Typography variant="body1">Legal Provisions</Typography>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Typography variant="body1" component="a">
            Help Center
          </Typography>
          <Typography variant="body1">Jobs</Typography>
          <Typography variant="body1">Cookie Preferences</Typography>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Typography variant="body1" component="a">
            Gift Cards
          </Typography>
          <Typography variant="body1">Terms of Use</Typography>
          <Typography variant="body1">Corporate Information</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
