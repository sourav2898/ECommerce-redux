import { Box, Button, CircularProgress } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { searchedProducts } from "../actions/productActions";
import Product from "../components/Product";
import { Link } from "react-router-dom";

const SearchBox = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#333",
  color: "#fff",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const Search = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  const getList = () => {
    dispatch(searchedProducts(value));
  };

  return (
    <Box p={2} height="90%" sx={{ overflowY: "scroll" }}>
      <SearchBox>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </SearchBox>
      <Button sx={{ margin: 1 }} onClick={getList} variant="contained">
        {" "}
        Search{" "}
      </Button>
      <Box
        p={2}
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

export default Search;
