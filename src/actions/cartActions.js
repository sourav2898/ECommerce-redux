import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
import commerceConnect from "../components/commerce";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const data = await commerceConnect.products.retrieve(id);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
