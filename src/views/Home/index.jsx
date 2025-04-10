import React from "react";
import { Box } from "@mui/material";

import HeroSection from "./components/HeroSection";
import CultureSection from "./components/CultureSection";
import LeadershipSection from "./components/LeadershipSection";

const Home = () => {
  return (
    <>
      <Box sx={{ px: { xs: 2, md: 4 } }}>
        <HeroSection />
        <CultureSection />
        <LeadershipSection />
      </Box>
    </>
  );
};

export default Home;
