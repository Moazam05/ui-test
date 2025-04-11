import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  IconButton,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  PartnerOneImg,
  PartnerTwoImg,
  PartnerThreeImg,
  PartnerFourImg,
} from "../../../assets/images";

const PartnersSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

  // Define how many partners to show at once based on screen size
  const partnersToShow = isMobile ? 1 : isTablet ? 2 : 3;

  // Partners data
  const partners = [
    {
      id: 1,
      name: "(주)행복한사람들",
      logo: PartnerOneImg,
      description:
        "행복한 날, 행복한 사람들과 함께하는 특별한 날을 선사합니다.",
    },
    {
      id: 2,
      name: "바른댓글 실천연대",
      logo: PartnerTwoImg,
      description: "바른댓글 정책으로 아름다운 사회를 만들어 갑니다.",
    },
    {
      id: 3,
      name: "아트리안",
      logo: PartnerThreeImg,
      description:
        "생활미술시장의 뛰어다임을 제안하는 상설 아트갤러리 프로젝트.",
    },
    {
      id: 4,
      name: "문화재단 빛과소리",
      logo: PartnerFourImg,
      description: "문화예술을 통해 지역사회에 빛과 소리를 전합니다.",
    },
    {
      id: 5,
      name: "미래교육센터",
      logo: PartnerOneImg,
      description: "창의적 교육 방법으로 미래 인재를 양성합니다.",
    },
  ];

  // State to track which partners are currently visible
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to previous partners
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return Math.max(0, partners.length - partnersToShow);
      }
      return Math.max(0, prevIndex - 1);
    });
  };

  // Navigate to next partners
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= partners.length - partnersToShow) {
        return 0;
      }
      return Math.min(partners.length - partnersToShow, prevIndex + 1);
    });
  };

  // Get currently visible partners
  const visiblePartners = partners.slice(
    currentIndex,
    currentIndex + partnersToShow
  );

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          gap: isMobile ? 4 : 2,
        }}
      >
        <Box
          sx={{
            mb: isMobile ? 4 : 0,
            width: isMobile ? "100%" : "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "center" : "flex-start",
            justifyContent: "center",
            flex: 1,
            maxWidth: isMobile ? "100%" : "50%",
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: "bold",
              textAlign: "left",
              mb: 2,
            }}
          >
            함께하는
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: "bold",
              textAlign: "left",
              mb: 4,
            }}
          >
            이들
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <IconButton
              onClick={handlePrev}
              sx={{
                bgcolor: "black",
                color: "white",
                mr: 1,
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.8)",
                },
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                bgcolor: "black",
                color: "white",
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.8)",
                },
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 4,
            width: isMobile ? "100%" : "auto",
            flexWrap: "nowrap",
            overflow: "hidden",
          }}
        >
          {visiblePartners.map((partner) => (
            <Box
              key={partner.id}
              sx={{
                textAlign: "center",
                width: isMobile ? "100%" : "250px",
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  height: 120,
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: "bold",
                  mb: 1.5,
                }}
              >
                {partner.name}
              </Typography>
              <Typography>{partner.description}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default PartnersSection;
