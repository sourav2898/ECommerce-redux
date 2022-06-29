import { Box, Typography } from "@mui/material";
import React from "react";

const Product = ({ data }) => {
  console.log(data);
  return (
    <Box
      p={1}
      sx={{
        width: 300,
        height: 300,
        border: "1px solid lightgray",
        "&:hover": {
          cursor: "pointer",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <img width="100%" height="75%" src={data?.image?.url} alt={data?.name} />
      <Typography variant="h6" color="#1985b1">
        {data?.name || "Title"}
      </Typography>
      <Typography variant="h5" color="#333">
        ${data?.price?.formatted || "Price"}
      </Typography>
    </Box>
  );
};

export default Product;
