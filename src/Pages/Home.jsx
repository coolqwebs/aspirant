import React from "react";
import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        width: "300px",
        height: "100px",
        padding: "15% 10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Button variant="contained">
        <NavLink to="/student">Для Абитуриента</NavLink>
      </Button>
      <Button variant="contained" color="secondary">
        <NavLink to="/employee">Для Сотрудника</NavLink>
      </Button>
    </Box>
  );
};

export default Home;
