import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box
      component="header"
      sx={{
        py: 2,
        position: "sticky",
        top: 0,
        bgcolor: "white",
        zIndex: 1100,
        px: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Box
          component="a"
          href="/"
          sx={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              fontFamily: "'Noto Serif KR', serif",
            }}
          >
            사색의향기
          </Typography>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Typography
              component="a"
              href="/intro"
              sx={{
                textDecoration: "none",
                color: "text.primary",
                fontWeight: 500,
                "&:hover": { color: "primary.main" },
              }}
            >
              소개
            </Typography>

            <Typography
              component="a"
              href="/app"
              sx={{
                textDecoration: "none",
                color: "text.primary",
                fontWeight: 500,
                "&:hover": { color: "primary.main" },
              }}
            >
              소소담담 APP
            </Typography>

            <Typography
              component="a"
              href="/activities"
              sx={{
                textDecoration: "none",
                color: "text.primary",
                fontWeight: 500,
                "&:hover": { color: "primary.main" },
              }}
            >
              활동
            </Typography>
          </Box>

          <Box>
            <Button
              id="language-button"
              aria-controls={open ? "language-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleLanguageClick}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                color: "white",
                bgcolor: "#333",
                borderRadius: "20px",
                px: 2,
                "&:hover": { bgcolor: "#555" },
                minWidth: "80px",
              }}
            >
              KOR
            </Button>
            <Menu
              id="language-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleLanguageClose}
              MenuListProps={{
                "aria-labelledby": "language-button",
              }}
            >
              <MenuItem onClick={handleLanguageClose}>KOR</MenuItem>
              <MenuItem onClick={handleLanguageClose}>ENG</MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem>
                <ListItemText
                  primary="사색의향기"
                  primaryTypographyProps={{ fontWeight: "bold" }}
                />
              </ListItem>
              <Divider />
              <ListItem button component="a" href="/intro">
                <ListItemText primary="소개" />
              </ListItem>
              <ListItem button component="a" href="/app">
                <ListItemText primary="소소담담 APP" />
              </ListItem>
              <ListItem button component="a" href="/activities">
                <ListItemText primary="활동" />
              </ListItem>
              <Divider />
              <ListItem>
                <Button
                  onClick={handleLanguageClick}
                  endIcon={<KeyboardArrowDownIcon />}
                  sx={{
                    color: "white",
                    bgcolor: "#333",
                    borderRadius: "20px",
                    px: 2,
                    "&:hover": { bgcolor: "#555" },
                  }}
                >
                  KOR
                </Button>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
