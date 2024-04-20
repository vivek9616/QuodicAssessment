import { createContext, useEffect, useState } from "react";
//import { fetchProducts } from '../services/APIservice'; // commented for deploying on git pages using json file instead API call.
import productsData  from '../data/products.json'; 

export const productContext = createContext(null);

export const ProductListProvider = (props) => {
  const [productList, setProductList] = useState([]);
  const [alphabetSelected, setAlphabetSelected] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // useEffect(() => {
  //   async function fetchData() {
  //     const APIresponse = await fetchProducts();
  //     setProductList(APIresponse);
  //   }
  //   fetchData();
  // })  # commented for deploying on git pages using json file instead API call.

  useEffect(() => {
    setProductList(productsData);
  });
  return (
    <productContext.Provider value={{ productList, setProductList, alphabetSelected, setAlphabetSelected, searchQuery, setSearchQuery }}>
      {props.children}
    </productContext.Provider>
  )
}