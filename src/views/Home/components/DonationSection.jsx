import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";

const DonationSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: 8,
          textAlign: "center",
          backgroundColor: "#F8F4F3",
          mt: isMobile ? 0 : 12,
          mb: isMobile ? 8 : 16,
          px: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h4"}
          component="h2"
          sx={{
            fontWeight: "medium",
            mb: 4,
            width: isMobile ? "90%" : "60%",
          }}
        >
          기부를 통해 따뜻한 마음을 보내고 싶다면,
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "medium", mb: 1 }}>
            후원계좌 안내
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            국민 924501-01-351204 / 사단법인 사색의향기
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 2,
            mt: 2,
            width: isMobile ? "100%" : "auto",
          }}
        >
          <Button
            variant="outlined"
            startIcon={<FavoriteIcon />}
            sx={{
              borderRadius: 30,
              px: 4,
              py: 1.5,
              borderColor: "#000",
              color: "#000",
              "&:hover": {
                borderColor: "#000",
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            정기 후원
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: 30,
              px: 4,
              py: 1.5,
              borderColor: "#000",
              color: "#000",
              "&:hover": {
                borderColor: "#000",
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            일시 후원
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default DonationSection;
