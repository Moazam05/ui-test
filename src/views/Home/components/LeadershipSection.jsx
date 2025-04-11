import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  ChairmanImg,
  PersonOne,
  PersonTwo,
  PersonThree,
} from "../../../assets/images";

const LeadershipSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "오덕균 이사장",
      position: "Director",
      image: PersonOne,
    },
    {
      id: 2,
      name: "정준호 이사",
      position: "Board Member",
      image: PersonTwo,
    },
    {
      id: 3,
      name: "권혁준 고문",
      position: "Advisor",
      image: PersonThree,
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* Director Message Section */}
        <Grid container spacing={4} alignItems="center" sx={{ mb: 10 }}>
          <Grid item xs={12} md={7}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2.5rem", md: "2.8rem" },
                mb: 5,
                color: "#333333",
              }}
            >
              이사장 인사말.
            </Typography>

            <Box sx={{ mb: 5 }}>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  lineHeight: 1.7,
                  color: "#333333",
                }}
              >
                안녕하세요, 사색의향기 이사장 오덕균 입니다.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  lineHeight: 1.7,
                  color: "#333333",
                }}
              >
                사색의향기는 '행복한 문화 나눔'을 통해 더 나은 사회를
                만들어가고자
                <br />
                노력해왔습니다. 앞으로도 문화와 인문학의 가치를 공유하며, 열린
                커뮤니티로서 함께 성장하겠습니다.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 5,
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  lineHeight: 1.7,
                  color: "#333333",
                }}
              >
                많은 관심과 응원 부탁드립니다. 감사합니다.
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  color: "#333333",
                }}
              >
                사단법인 사색의향기 이사장 오덕균
              </Typography>
            </Box>

            <Button
              variant="text"
              endIcon={<ArrowForwardIcon />}
              sx={{
                color: "#333333",
                fontWeight: 500,
                textTransform: "none",
                fontSize: "0.95rem",
                "&:hover": {
                  backgroundColor: "transparent",
                  textDecoration: "underline",
                },
                p: 0,
              }}
            >
              인터뷰 더 보기
            </Button>

            {/* Mobile-only image */}
            {isMobile && (
              <Box
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Box
                  component="img"
                  src={ChairmanImg}
                  alt="Director"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center center",
                  }}
                />
              </Box>
            )}
          </Grid>
        </Grid>

        {/* Desktop-only Blue Circle Image at the right side */}
        <Box
          sx={{
            position: "absolute",
            right: { md: "-40px", lg: "0" },
            top: "70px",
            zIndex: 0,
            display: { xs: "none", md: "block" },
          }}
        >
          <Box>
            <Box
              component="img"
              src={ChairmanImg}
              alt="Director"
              sx={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          </Box>
        </Box>

        {/* Team Members Section */}
        <Box sx={{ pb: isMobile ? 0 : 4, mt: 6, pt: isMobile ? 0 : 4 }}>
          <Grid container spacing={6} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid
                item
                xs={12}
                sm={4}
                key={member.id}
                sx={{ textAlign: "center" }}
              >
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: { xs: 160, md: 180 },
                    height: { xs: 160, md: 180 },
                    mx: "auto",
                    mb: 2,
                    border: "none",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    color: "#333333",
                  }}
                >
                  {index === 0
                    ? "오덕균 이사장"
                    : index === 1
                    ? "정준호 이사"
                    : "권혁준 고문"}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default LeadershipSection;
