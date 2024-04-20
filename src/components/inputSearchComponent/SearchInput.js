import './SearchInput.css';
import { useContext } from 'react';
import { productContext } from '../../context/products';

function SearchInput() {
  const productState = useContext(productContext);
  const searchQueryHandler = (event) => {
    productState.setSearchQuery(event.target.value);
  }
  return (
    <div>
      <input className='typeSearch' type="text" placeholder="Search products..." onChange={searchQueryHandler} />
    </div>
  );
};

export default SearchInput;