import React from 'react';
import { useContext } from 'react';
import { productContext } from '../../context/products.jsx';
import './Alphabet.css'

function Alphabet() {
  const productState = useContext(productContext);
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const alphabeticfilterhandler = (alphabet) => {
    productState.setAlphabetSelected(alphabet);
  }
  const resetFilterHandler = () => {
    productState.setAlphabetSelected('');
    productState.setSearchQuery('');
  }

  return (
    <div>
      <div>
        {alphabets.map((alphabet) => (
          <button className='alphabetKeys' key={alphabet} onClick={() => alphabeticfilterhandler(alphabet)} >
            {alphabet}
          </button>
        ))}
      </div>
      <div>
        <button className='resetButton' onClick={() => resetFilterHandler()}> RESET Filter</button>
      </div>
    </div>
  );
};


export default Alphabet;