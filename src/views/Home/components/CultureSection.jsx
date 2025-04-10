import React from "react";
import { Box, Typography, Container } from "@mui/material";
import CultureImg from "../../../assets/culture.svg";

const CultureSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "white",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          {/* Main Heading */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
              mb: 4,
              lineHeight: 1.4,
            }}
          >
            새로운 문화 나눔을 만들어갑니다.
          </Typography>

          {/* Middle Section with Image */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 4,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.6rem", sm: "2rem", md: "2.4rem" },
              }}
            >
              우리는
            </Typography>

            <Box
              component="img"
              src={CultureImg}
              alt="Open book"
              sx={{
                width: { xs: "120px", md: "200px" },
                height: { xs: "60px", md: "100px" },
                borderRadius: "30px",
                mx: 2,
                objectFit: "cover",
              }}
            />
          </Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.6rem", sm: "2rem", md: "2.4rem" },
              mb: 4,
            }}
          >
            사색의향기입니다.
          </Typography>

          {/* Description Text */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.9rem", md: "1rem" },
              lineHeight: 1.8,
              color: "#555",
            }}
          >
            사색의향기는 문화인들의 커뮤니티로서 "행복한 문화 나눔"을 통한 사회
            공헌과 선진적이고 건전한 사회 문화를 만들어나가기 위해 노력하는
            비영리 단체입니다.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CultureSection;
