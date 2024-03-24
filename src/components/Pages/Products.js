import React from 'react'
import styled from 'styled-components'
import Sort from '../Sort'
import FilterSection from '../FilterSection';
import ProductList from '../ProductList';
import { useFilterContext } from '../FilterContext';
import Footer from '../Footer';

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
  `;

const Products = () => {
  const {filter_products}=useFilterContext();

  console.log(filter_products.length);
  return (
    <Wrapper>
        <div className='grid grid-filter-column'>
          <div>
            {/* {
              filter_products.map((product,index)=>
              <FilterSection key={index} product={product}/>)
            } */}
          </div>

          <section className='product-view--sort'>
            <div className='sort-filter'>
              <Sort/>
            </div>
            <div className='main-product'>
              <ProductList/>
            </div>
          </section>
        </div>
        <Footer/>
    </Wrapper>
  )
}

export default Products