import React from "react";
import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const title =
    location.pathname === "/student"
      ? "Данные об аспиранте"
      : "Аспирантура и DHP КГТУ им. И. Разакова";
  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="md">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              <NavLink to="/">{title}</NavLink>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
