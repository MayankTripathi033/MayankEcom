import React from 'react'
import { useFilterContext } from './FilterContext'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const {filter_products, gridView} = useFilterContext();
  if (gridView === true) {
    return <GridView Products={filter_products}/>
  }

  return <ListView Products={filter_products}/>
}

export default ProductList