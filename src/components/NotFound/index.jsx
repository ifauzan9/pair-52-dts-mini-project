import { Box, Typography } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: "100px",
          color: "#fff",
          paddingBottom: "100px",
          textAlign: "center",
        }}
      >
        <Typography variant="h3">404 NOT FOUND</Typography>
      </Box>
    </>
  );
};

export default NotFound;
