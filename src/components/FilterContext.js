import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./hooks/ContextApi";
import reducer from "./FilterReducer"

const FIlterContext = createContext();


const intialState = {
  filter_products: [],
  all_products: [],
  gridView: false,
  sortingvalue: "Lowest" 
}

export const FilterContextProvider = ({children}) => {
  const {products} = useProductContext();

  //Grid View
  const setGridView = () => {
    return dispatch({type: 'SET_GRIDVIEW'})
  }
  //List View
  const setListView = () => {
    return dispatch({type: 'SET_LISTVIEW'})
  }

  //Sorting products
  const sorting = () => {
    return dispatch({type: "SET_SORT"})
  }

  //Sorting Products based upon options

  const [state, dispatch] = useReducer(reducer, intialState); 

  useEffect(()=>{
    dispatch({type: "SORTING_PRODUCTS", payload: products})
},[state.sortingvalue])

  useEffect(() => {
    dispatch({type: 'FILTER_PRODUCTS', payload: products})
    dispatch({type: 'ALL_PRODUCTS', payload: products})
  }, [products])
  
  return (
    <FIlterContext.Provider value={{...state, setGridView, setListView, sorting}}>{children}</FIlterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FIlterContext);
}