import { Box, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../actions/cartActions";
import { Link } from "react-router-dom";

const CartItem = ({ data }) => {
  const { product } = data;
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeFromCart(product?.id));
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 2,
        borderBottom: "1px solid lightgray",
      }}
    >
      <img
        width="50px"
        height="50px"
        style={{ objectFit: "cover" }}
        src={product?.image?.url}
        alt="cart"
      />
      <Link
        to={`/details/${product?.id}`}
        style={{
          cursor: "pointer",
          color: "#fff",
          textDecoration: "none",
          margin: 10,
          width: 300,
        }}
      >
        <Typography color="#1985b1">
          {" "}
          {product?.name || "Dummy title"}{" "}
        </Typography>
      </Link>
      <Typography color="#333"> ${product?.price?.formatted} </Typography>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2, color: "#333" }}
        onClick={remove}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default CartItem;
