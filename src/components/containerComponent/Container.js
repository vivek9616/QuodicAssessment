import Alphabet from '../alphabetComponent/Alphabet.js';
import SearchInput from '../inputSearchComponent/SearchInput.js';
import List from '../listComponent/List.js';
import './Container.css';

function Container() {
    return (
        <div class="container">
            <SearchInput></SearchInput>
            <Alphabet></Alphabet>
            <List></List>
        </div>
    )
}

export default Container;