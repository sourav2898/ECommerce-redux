import { Box, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import React from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";
import { listProducts } from "../actions/productActions";

const ProductList = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    <Box p={2} height="90%" sx={{ overflowY: "scroll" }}>
      <Typography textAlign="center" variant="h5">
        {" "}
        List of Products
      </Typography>
      <Box
        m={2}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {loading && <CircularProgress />}
        {products?.map((product, index) => {
          return (
            <Link
              key={index}
              to={`/details/${product?.id}`}
              style={{
                cursor: "pointer",
                color: "#fff",
                textDecoration: "none",
                margin: 10,
              }}
            >
              <Product data={product} />;
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default ProductList;
