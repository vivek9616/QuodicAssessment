import Alphabet from '../alphabetComponent/Alphabet';
import SearchInput from '../inputSearchComponent/SearchInput';
import List from '../listComponent/List';
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