import React, { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/consts";
import axios from "axios";
import { notify } from "../components/toastify/Toastify";

export const productContext = createContext();

export const useProductContext = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  forEditVal: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProduct = async (newProduct) => {
    try {
      let res = await axios.post(API, newProduct);
      notify('success', `Продукт ${newProduct.title} был успешно добавлен!`)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <productContext.Provider value={{ addProduct }}>
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
