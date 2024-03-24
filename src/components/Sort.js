import React from 'react'
import styled from 'styled-components';
import {BsFillGridFill, BsList} from "react-icons/bs";
import { useFilterContext } from './FilterContext';
const Sort = () => {
  const {gridView, setGridView, setListView, sorting, filter_products} = useFilterContext();
 return (
    <Wrapper className="sort-section">
      <div className='sorting-list--grid'>
        {/**Options Group */}
        <button className={gridView? "active sort-btn" : "sort-btn"}
        onClick={setGridView}
        >
          <BsFillGridFill className='icon'/>
        </button>
        <button className={!gridView? "active sort-btn" : "sort-btn"}
        onClick={setListView}
        >
          <BsList className='icon'/>
        </button>
      </div>
      {/*Second Column*/}
      <div className='product-data'>
        <h3>{`Products Available ${filter_products.length}`}</h3>
      </div>
      {/*Third Column */}
      <div className='sort-selection'>
        <form action='#'>
          <label htmlFor='sort'></label>
          <select name='sort' id='sort' className='sort-selection--style' onClick={sorting}>
            <option value="Lowest">
              <button>Price(Lowest)</button>
            </option>  
            <br/>
            <option value="Highest">
              <button>Price(Highest)</button>
            </option>
            <br/>
            <option value="a-z">
              <button>Price(A-Z)</button>
            </option>
            <br/>
            <option value="z-a">
              <button>Price(Z-A)</button>
            </option>
            <br/>
          </select>  
        </form>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  margin-right: 2rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 1rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;


export default Sort