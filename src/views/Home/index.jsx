import React from "react";
import { Box } from "@mui/material";

import HeroSection from "./components/HeroSection";
import CultureSection from "./components/CultureSection";

const Home = () => {
  return (
    <>
      <Box sx={{ px: 4 }}>
        <HeroSection />
        <CultureSection />
      </Box>
    </>
  );
};

export default Home;
