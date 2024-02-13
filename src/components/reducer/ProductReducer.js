const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featureData = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "IS_LOADING":
      return{
        ...state,
        isProductLoading: true,
      }
    case "IS_ERROR":
      return{
        ...state,
        isProductError: true,
        isError: true
      }
    case "GET_SINGLE_PRODUCT":
      return{
        ...state,
        SingleProduct: action.payload,
        isProductLoading: false
      }

    default:
      return state;
  }
};

export default ProductReducer;