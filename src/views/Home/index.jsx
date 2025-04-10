import React from "react";
import { Box } from "@mui/material";

import HeroSection from "./components/HeroSection";

const Home = () => {
  return (
    <>
      <Box sx={{ px: 4 }}>
        <HeroSection />
      </Box>
    </>
  );
};

export default Home;
