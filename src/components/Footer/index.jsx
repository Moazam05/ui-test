import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ bgcolor: "#222222", color: "white", py: 6 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {/* Left Column - Logo and Company Info */}
          <Box sx={{ flexBasis: isMobile ? "100%" : "70%" }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <ChatBubbleOutlineIcon sx={{ fontSize: 32, mr: 1 }} />
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "medium" }}
              >
                사색의향기
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Grid container spacing={1}>
                <Grid item xs={4} sm={3}>
                  <Typography variant="body2" sx={{ color: "#fff" }}>
                    개인정보 처리방침
                  </Typography>
                </Grid>
                <Grid item xs={4} sm={3}>
                  <Typography variant="body2" sx={{ color: "#fff" }}>
                    이용약관
                  </Typography>
                </Grid>
                <Grid item xs={4} sm={6}>
                  <Typography variant="body2" sx={{ color: "#999" }}>
                    고객센터 문의 08:00-19:00 (주말 및 공휴일 휴무)
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ mb: 1 }}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ color: "#fff" }}>
                    사단법인 사색의향기
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ color: "#999" }}>
                    이사장
                    <span style={{ color: "#fff", marginLeft: "3px" }}>
                      오화균
                    </span>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ color: "#999" }}>
                    고유번호{" "}
                    <span style={{ color: "#fff", marginLeft: "3px" }}>
                      355-82-00129
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ mb: 1 }}>
              <Grid container spacing={1}>
                <Grid item xs={4} sm={3}>
                  <Typography variant="body2" sx={{ color: "#999" }}>
                    주소
                    <span style={{ color: "#fff", marginLeft: "3px" }}>
                      서울시 강남구 테헤란로 19번 28 이해빌딩5층(역삼동)
                    </span>
                  </Typography>
                </Grid>
                <Grid item xs={4} sm={3}>
                  <Typography variant="body2" sx={{ color: "#999" }}>
                    전화
                    <span style={{ color: "#fff", marginLeft: "3px" }}>
                      02-539-5101
                    </span>
                  </Typography>
                </Grid>
                <Grid item xs={4} sm={3}>
                  <Typography variant="body2" sx={{ color: "#999" }}>
                    팩스
                    <span style={{ color: "#fff", marginLeft: "3px" }}>
                      070-8668-5091
                    </span>
                  </Typography>
                </Grid>
                <Grid item xs={4} sm={3}>
                  <Typography variant="body2" sx={{ color: "#999" }}>
                    이메일
                    <span style={{ color: "#fff", marginLeft: "3px" }}>
                      culppy@culppy.com
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            <Typography variant="body2" sx={{ color: "#999", mt: 2 }}>
              Copyright © 2025 사색의향기. All Rights Reserved
            </Typography>
          </Box>

          {/* Right Column - Newsletter Subscription */}
          <Box
            sx={{
              flexBasis: isMobile ? "100%" : "30%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              sx={{ mb: 2, fontWeight: "bold" }}
            >
              뉴스레터 구독하기
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff", mb: 3 }}>
              이메일 구독을 통해 사색의향기의 최신 소식과 교육 및 이벤트 소식을
              빠르게 받아보실 수 있습니다.
            </Typography>

            <Button
              variant="outlined"
              sx={{
                borderColor: "white",
                color: "white",
                borderRadius: 30,
                py: 1.5,
                px: 3,
                width: isMobile ? "100%" : "80%",
                alignSelf: "flex-start",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <Box>이메일 구독신청</Box>
              <ArrowForwardIcon />
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
