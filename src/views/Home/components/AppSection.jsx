import React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DownloadIcon from "@mui/icons-material/Download";
import AppIconImg from "../../../assets/appicon.png";
import AppIconMobile from "../../../assets/appicon-mobile.png";

const AppSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Left side content
  const leftContent = {
    title: "더 나은 세상을",
    titleTwo: "만들어 가기 위한 노력.",
    description1:
      "바른 인성과 성품을 고양하며 함께 나누는 활동을 통해 세대와 나라를 초월한 커뮤니티를 만들어나가려고 노력하고 있습니다.",
    description2: "작은 담소와 삶의 지혜가 필요하신 모든 분들을 환영합니다.",
    description3:
      "삶의 어려운 고통이 있으신 분들에게 작은 도움을 드립니다. 법률적이거나 개인적으로 해결하기 어려운 문제들이 있으시다면 소담 사포터즈에게 도움을 요청해주세요.",
    appInfo: "2025. 6. 출시 예정 커뮤니티 APP '소소담담'",
    buttonText: "앱 다운로드",
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 8,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "center" : "flex-start",
        justifyContent: "space-between",
        gap: 4,
      }}
    >
      {/* Left Side Content */}
      <Box sx={{ width: isMobile ? "100%" : "45%", mb: isMobile ? 6 : 0 }}>
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              width: "75px",
              height: "75px",
              mb: 3,
            }}
          >
            <img
              src={AppIconImg}
              alt="App Icon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: "bold", lineHeight: 1.3 }}
          >
            {leftContent.title}
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: "bold", mb: 4, lineHeight: 1.3 }}
          >
            {leftContent.titleTwo}
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            {leftContent.description1}
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            {leftContent.description2}
          </Typography>

          <Typography variant="body1" sx={{ mb: 4 }}>
            {leftContent.description3}
          </Typography>

          <Typography variant="h6" sx={{ mb: 4, fontWeight: "medium" }}>
            {leftContent.appInfo}
          </Typography>

          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            sx={{
              borderRadius: 30,
              py: 1.5,
              px: 3,
              borderColor: "#000",
              color: "#000",
              "&:hover": {
                borderColor: "#000",
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            {leftContent.buttonText}
          </Button>
        </Box>
      </Box>

      {/* Right Side App Preview */}
      <Box
        sx={{
          width: isMobile ? "100%" : "50%",
          maxWidth: isMobile ? "100%" : 450,
        }}
      >
        <Box sx={{}}>
          <img
            src={AppIconMobile}
            alt="App Preview"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default AppSection;
