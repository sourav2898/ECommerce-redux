import { Box, Typography } from "@mui/material";
import React from "react";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <Box p={2}>
      <Typography textAlign="left" variant="h5">
        Shopping Cart
      </Typography>
      <Box>
        {!cartItems.length && (
          <Typography textAlign="center" color="#333">
            {" "}
            Your cart is empty{" "}
          </Typography>
        )}
        {cartItems?.map((val, index) => {
          return <CartItem key={index} data={val} />;
        })}
      </Box>
    </Box>
  );
};

export default Cart;
