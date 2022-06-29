import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              to="/"
              style={{
                cursor: "pointer",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              {" "}
              Nirmitee ECommerce{" "}
            </Link>
          </Typography>

          <Link
            to="/search"
            style={{ cursor: "pointer", color: "#fff", underline: "none" }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <SearchIcon />
            </IconButton>
          </Link>
          <Link
            to="/cart"
            style={{ cursor: "pointer", color: "#fff", underline: "none" }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <ShoppingCartIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
