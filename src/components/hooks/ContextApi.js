import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/ProductReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";
//INITIAL STATE
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isProductLoading: false,
  SingleProduct: {}
};
//APP PROVIDER
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  //API GET STORED INSIDE THE PRODUCTS
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  //GET_SINGLE_PRODUCTS FROM API
  const getSingleProduct = async(url) => {
    dispatch({type: "IS_LOADING"})
    try {
      const res = await axios.get(url);
      const SingleProduct = await res.data;
      dispatch({type: "GET_SINGLE_PRODUCT", payload: SingleProduct})
    } catch (error) {
      dispatch({type: "IS_ERROR"})
    }
  }


//GETS PRODUCTS VALUE FROM API
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// CUSTOM HOOKS
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
