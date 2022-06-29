import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Typography,
  Link,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

const ProductDetails = () => {
  const [isAdded, setIsAdded] = useState(false);
  const { id } = useParams();
  const history = useNavigate();

  const dispatch = useDispatch();

  const productDetails = useSelector((store) => store.productDetails);
  const { loading, product, error } = productDetails;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    dispatch(listProductDetails(id));
    const getItem = cartItems.find((val) => val?.product?.id === id);
    if (getItem) setIsAdded(true);
  }, [cartItems, dispatch, id]);

  const getDescription = (desc) => {
    if (desc === undefined || desc === null || desc.trim() === "") return "";

    return desc.toString().replace(/(<([^>]+)>)/gi, "");
  };

  const add = () => {
    if (isAdded) {
      history("/cart");
    } else dispatch(addToCart(id, 1));
  };

  return (
    <>
      <Box
        p={2}
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {loading ? (
          <CircularProgress sx={{ margin: "0 auto" }} />
        ) : (
          <>
            <img
              width="50%"
              height="450px"
              src={product?.image?.url}
              alt={product?.name}
              style={{ objectFit: "cover" }}
            />
            <Box ml={2} width="40%" height="100%" textAlign="left">
              <Typography variant="h4" p={1} color="#333">
                {" "}
                {product?.name}
              </Typography>
              <Divider />
              <Typography variant="h6" p={1} color="gray">
                {" "}
                Price: ${product?.price?.formatted}{" "}
              </Typography>
              <Divider />
              <Typography variant="h6" p={1} color="gray">
                Description:
                {getDescription(product?.description)}
              </Typography>
              <Button
                sx={{ position: "relative", bottom: "0" }}
                fullWidth
                variant="contained"
                onClick={add}
              >
                {isAdded ? "Go to Cart" : "Add to Cart"}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default ProductDetails;
