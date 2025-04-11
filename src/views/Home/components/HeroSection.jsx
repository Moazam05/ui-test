import React, { useState } from "react";
import { Box, Typography, Container, IconButton, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { HeroImg } from "../../../assets/images/index";

// Sample carousel data - you can replace this with your actual data
const carouselData = [
  {
    id: 1,
    image: HeroImg,
    title: "특별한 나눔",
    mainHeading: "함께하는 마음이 만드는 소중한 변화",
    subHeading: "즐거움과 나눔이 있는 감동의 순간",
  },
  {
    id: 2,
    image: "https://source.unsplash.com/random/1600x900/?library,book",
    title: "지식의 공유",
    mainHeading: "책을 통해 배우는 세상의 지혜",
    subHeading: "함께 읽고 나누는 독서의 즐거움",
  },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "70vh", md: "90vh" },
        overflow: "hidden",
        mt: 1,
      }}
    >
      {/* Carousel Slides */}
      <Box
        sx={{
          height: "100%",
          position: "relative",
          transition: "all 0.3s ease",
          borderRadius: { xs: "24px", md: "48px" },
          overflow: "hidden",
        }}
      >
        {carouselData.map((slide, index) => (
          <Box
            key={slide.id}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: activeSlide === index ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  activeSlide === 0
                    ? "transparent"
                    : "linear-gradient(180deg, rgba(0,0,102,0.7) 0%, rgba(0,153,204,0.4) 100%)",
                zIndex: 1,
              },
            }}
          >
            {/* Text Overlay */}
            <Container
              maxWidth="lg"
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                textAlign: "center",
                position: "relative",
                zIndex: 2,
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 2,
                  fontWeight: 500,
                  fontSize: { xs: "1rem", md: "1.2rem" },
                }}
              >
                {slide.title}
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                  mb: 3,
                  letterSpacing: "0.02em",
                  lineHeight: 1.2,
                }}
              >
                {slide.mainHeading}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  maxWidth: "600px",
                  fontSize: { xs: "0.9rem", md: "1.1rem" },
                  opacity: 0.9,
                }}
              >
                {slide.subHeading}
              </Typography>
            </Container>
          </Box>
        ))}
      </Box>

      {/* Curved Navigation Controls Container */}

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: { xs: "85%", sm: "50%", md: "25%" },
          height: { xs: 100, md: 120 },
          bgcolor: "white",
          zIndex: 10,
          borderTopLeftRadius: { xs: 40, md: 60 },
          //   borderBottomLeftRadius: { xs: 40, md: 30 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography sx={{ color: "#333", fontWeight: "bold" }}>
            {activeSlide + 1}
          </Typography>

          <Box sx={{ position: "relative", width: "100px", height: "2px" }}>
            {/* Background line */}
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              }}
            />

            {/* Progress line */}
            <Box
              sx={{
                position: "absolute",
                width: `${((activeSlide + 1) / carouselData.length) * 100}%`,
                height: "100%",
                backgroundColor: "#333",
                transition: "width 0.5s ease-in-out",
              }}
            />
          </Box>

          <Typography sx={{ color: "#333" }}>{carouselData.length}</Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              onClick={handlePrev}
              sx={{
                color: "white",
                backgroundColor: "#000",
                "&:hover": {
                  backgroundColor: "#333",
                },
                width: { xs: 36, md: 48 },
                height: { xs: 36, md: 48 },
              }}
            >
              <ArrowBackIcon />
            </IconButton>

            <IconButton
              onClick={handleNext}
              sx={{
                color: "white",
                backgroundColor: "#000",
                "&:hover": {
                  backgroundColor: "#333",
                },
                width: { xs: 36, md: 48 },
                height: { xs: 36, md: 48 },
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeroSection;
