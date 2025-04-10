import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Avatar,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChairmanImg from "../../../assets/chairman.png";
import PersonOne from "../../../assets/person-one.png";
import PersonTwo from "../../../assets/person-two.png";
import PersonThree from "../../../assets/person-three.png";

const LeadershipSection = () => {
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
        py: { xs: 8, md: 12 },
        backgroundColor: "#f9f9f9",
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
                fontSize: { xs: "2rem", md: "2.5rem" },
                mb: 4,
              }}
            >
              이사장 인사말.
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                }}
              >
                안녕하세요, 사색의향기 이사장 오덕균 입니다.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                }}
              >
                사색의향기는 '행복한 문화 나눔'을 통해 더 나은 사회를
                만들어가고자 노력해왔습니다. 앞으로도 문화와 인문학의 가치를
                공유하며, 열린 커뮤니티로서 함께 성장하겠습니다.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                }}
              >
                많은 관심과 응원 부탁드립니다. 감사합니다.
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                }}
              >
                사단법인 사색의향기 이사장 오덕균
              </Typography>

              <Box
                component="img"
                src={ChairmanImg}
                alt="Signature"
                sx={{
                  height: "40px",
                  ml: 2,
                }}
              />
            </Box>

            <Button
              variant="text"
              endIcon={<ArrowForwardIcon />}
              sx={{
                color: "#333",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "transparent",
                  textDecoration: "underline",
                },
                p: 0,
              }}
            >
              인터뷰 더 보기
            </Button>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "300px", md: "400px" },
                backgroundColor: "#e6eef7",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={teamMembers[0].image}
                alt="Director"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Team Members Section */}
        <Grid container spacing={6} justifyContent="center">
          {teamMembers.map((member) => (
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
                  width: { xs: 180, md: 220 },
                  height: { xs: 180, md: 220 },
                  mx: "auto",
                  mb: 3,
                  border: "5px solid #e6e6e6",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                }}
              >
                {member.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LeadershipSection;
