import './List.css';
import { useContext } from 'react';
import { productContext } from '../../context/products.jsx';

function List() {
  const productState = useContext(productContext);
  const productsList = productState.productList;
  const searchQuery = productState.searchQuery;
  const alphabetSelected = productState.alphabetSelected;
  const filteredProducts = productsList.filter((product) => {
    const title = product.title.toLowerCase();
    return (
      title.includes(searchQuery.toLowerCase()) &&
      (alphabetSelected === '' || title.startsWith(alphabetSelected.toLowerCase()))
    );
  });
  return (
    <div className='listComponent'>
      <h2>Search Results</h2>
      <div className='searchListDisplay'>
        {filteredProducts.map((product) => (
          <div className='productID' key={product.id}>
            <img src={product.image} alt={product.title} loading='lazy' />
            <p className='productTitle'>{product.title}</p>
            <p className='productPrice'>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;