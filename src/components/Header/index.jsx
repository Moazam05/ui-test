import React, { useState } from "react";
import {
  Box,
  Typography,
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
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const mobileMenuOpen = Boolean(mobileAnchorEl);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileLanguageClick = (event) => {
    // Prevent the event from bubbling up to parent elements
    event.stopPropagation();
    setMobileAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
  };

  const handleMobileLanguageClose = () => {
    setMobileAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleLanguageSelect = () => {
    // Handle language selection logic here
    handleLanguageClose();
    handleMobileLanguageClose();
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
        px: { xs: 2, md: 4 },
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

        {/* Desktop Navigation */}
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
              href="/"
              sx={{
                textDecoration: "none",
                color: "text.primary",
                fontWeight: 500,
                "&:hover": { color: "primary.main" },
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  width: "0",
                  height: "2px",
                  bottom: "-4px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "primary.main",
                  transition: "width 0.3s",
                },
                "&:hover:after": {
                  width: "100%",
                },
              }}
            >
              소개
            </Typography>

            <Typography
              component="a"
              href="/"
              sx={{
                textDecoration: "none",
                color: "text.primary",
                fontWeight: 500,
                "&:hover": { color: "primary.main" },
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  width: "0",
                  height: "2px",
                  bottom: "-4px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "primary.main",
                  transition: "width 0.3s",
                },
                "&:hover:after": {
                  width: "100%",
                },
              }}
            >
              소소담담 APP
            </Typography>

            <Typography
              component="a"
              href="/"
              sx={{
                textDecoration: "none",
                color: "text.primary",
                fontWeight: 500,
                "&:hover": { color: "primary.main" },
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  width: "0",
                  height: "2px",
                  bottom: "-4px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "primary.main",
                  transition: "width 0.3s",
                },
                "&:hover:after": {
                  width: "100%",
                },
              }}
            >
              활동
            </Typography>
          </Box>

          {/* Desktop Language Selector */}
          <Box>
            <Button
              id="language-button"
              aria-controls={open ? "language-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleLanguageClick}
              endIcon={<KeyboardArrowDownIcon />}
              startIcon={<LanguageIcon />}
              sx={{
                color: "white",
                bgcolor: "#333",
                borderRadius: "20px",
                px: 2,
                "&:hover": { bgcolor: "#555" },
                minWidth: "100px",
                transition: "all 0.3s",
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
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={() => handleLanguageSelect("KOR")}>
                KOR
              </MenuItem>
              <MenuItem onClick={() => handleLanguageSelect("ENG")}>
                ENG
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          sx={{
            display: { xs: "block", md: "none" },
            color: "#333",
          }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{
            "& .MuiDrawer-paper": {
              width: { xs: "80%", sm: "320px" },
              boxSizing: "border-box",
              backgroundColor: "#fff",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))",
              backdropFilter: "blur(8px)",
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Drawer Header with Close Button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 2,
                borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "'Noto Serif KR', serif",
                }}
              >
                사색의향기
              </Typography>
              <IconButton onClick={toggleDrawer(false)}>
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Menu Items */}
            <List sx={{ flexGrow: 1, padding: 0 }}>
              <ListItem
                button
                component="a"
                href="/"
                sx={{
                  py: 2,
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                <ListItemText
                  primary="소개"
                  primaryTypographyProps={{
                    fontWeight: 500,
                    fontSize: "1.1rem",
                  }}
                />
              </ListItem>

              <Divider variant="middle" sx={{}} />

              <ListItem
                button
                component="a"
                href="/"
                sx={{
                  py: 2,
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                <ListItemText
                  primary="소소담담 APP"
                  primaryTypographyProps={{
                    fontWeight: 500,
                    fontSize: "1.1rem",
                  }}
                />
              </ListItem>

              <Divider variant="middle" sx={{}} />

              <ListItem
                button
                component="a"
                href="/"
                sx={{
                  py: 2,
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                <ListItemText
                  primary="활동"
                  primaryTypographyProps={{
                    fontWeight: 500,
                    fontSize: "1.1rem",
                  }}
                />
              </ListItem>
            </List>

            {/* Language Selector in Drawer Footer */}
            <Box
              sx={{
                p: 3,
                borderTop: "1px solid rgba(0, 0, 0, 0.08)",
                backgroundColor: "rgba(0, 0, 0, 0.02)",
              }}
            >
              <Button
                id="mobile-language-button"
                aria-controls={
                  mobileMenuOpen ? "mobile-language-menu" : undefined
                }
                aria-haspopup="true"
                aria-expanded={mobileMenuOpen ? "true" : undefined}
                onClick={handleMobileLanguageClick}
                endIcon={<KeyboardArrowDownIcon />}
                startIcon={<LanguageIcon />}
                sx={{
                  color: "white",
                  bgcolor: "#333",
                  borderRadius: "20px",
                  px: 2,
                  py: 1,
                  width: "100%",
                  justifyContent: "space-between",
                  "&:hover": { bgcolor: "#555" },
                  transition: "all 0.3s",
                }}
              >
                KOR
              </Button>
              <Menu
                id="mobile-language-menu"
                anchorEl={mobileAnchorEl}
                open={mobileMenuOpen}
                onClose={handleMobileLanguageClose}
                MenuListProps={{
                  "aria-labelledby": "mobile-language-button",
                }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
              >
                <MenuItem onClick={() => handleLanguageSelect("KOR")}>
                  KOR
                </MenuItem>
                <MenuItem onClick={() => handleLanguageSelect("ENG")}>
                  ENG
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
