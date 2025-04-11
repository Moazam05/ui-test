import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  ActivityOne,
  ActivityTwo,
  ActivityThree,
  ActivityFour,
} from "../../../assets/images";

// Dummy data to represent the sections shown in the image
const activities = [
  {
    id: 1,
    title: "인문학 콘서트",
    description:
      "깊은 사유와 따뜻한 대화가 어우러진 시간 마음을 울리는 문학과 인문학의 이야기",
    image: ActivityOne,
  },
  {
    id: 2,
    title: "지역 축제",
    description:
      "지역의 습관을 느끼며 함께 즐는 하루 소박한 만남속에 거지는 웃기",
    image: ActivityTwo,
  },
  {
    id: 3,
    title: "나눔 바자회",
    description: "행복이 전해지는 물건들,\n그 속의 이야기들",
    image: ActivityThree,
  },
  {
    id: 4,
    title: "따뜻한 후원",
    description:
      "작은 나눔이 모여 큰 울림이 됩니다 사회의합기와 함께 만들어가는 더 나은 내일",
    image: ActivityFour,
  },
];

const ActivitiesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 8 } }}>
      <Box sx={{ mb: 6, textAlign: "center" }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{ fontWeight: "bold", mb: 1 }}
        >
          함께하는 일 · 우리의 흔적
        </Typography>
      </Box>

      <Box>
        {activities.map((activity, index) => (
          <Card
            key={activity.id}
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: isMobile
                ? "column"
                : index % 2 === 0
                ? "row"
                : "row-reverse",
              mb: 5,
              backgroundColor: "transparent",
              borderRadius: 0,
              overflow: "visible",
            }}
          >
            <CardMedia
              component="img"
              image={activity.image}
              alt={activity.title}
              sx={{
                width: isMobile ? "100%" : "74%",
                height: isMobile ? 100 : 170,
                objectFit: "cover",
                borderRadius: 1,
              }}
            />
            <Box
              sx={{
                display: "flex",
                width: isMobile ? "100%" : "26%",
                flexDirection: "column",
                justifyContent: "center",
                p: isMobile ? 2 : 4,
                pl: !isMobile && index % 2 === 0 ? 4 : undefined,
                pr: !isMobile && index % 2 !== 0 ? 4 : undefined,
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  textAlign: isMobile
                    ? "center"
                    : index % 2 === 0
                    ? "left"
                    : "right",
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 1,
                    whiteSpace: "pre-line",
                    fontSize: "0.9rem",
                  }}
                >
                  {activity.description}
                </Typography>
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontWeight: "bold",
                    mt: 2,
                  }}
                >
                  {activity.title}
                </Typography>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default ActivitiesSection;
