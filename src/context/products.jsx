import { createContext, useEffect, useState } from "react";
import { fetchProducts } from '../services/APIservice';
//import productsData  from '../data/products.json'; # Can be used if not able to fetch data from API.

export const productContext = createContext(null);

export const ProductListProvider = (props) => {
  const [productList, setProductList] = useState([]);
  const [alphabetSelected, setAlphabetSelected] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchData() {
      const APIresponse = await fetchProducts();
      setProductList(APIresponse);
    }
    fetchData();
  })
  return (
    <productContext.Provider value={{ productList, setProductList, alphabetSelected, setAlphabetSelected, searchQuery, setSearchQuery }}>
      {props.children}
    </productContext.Provider>
  )
}