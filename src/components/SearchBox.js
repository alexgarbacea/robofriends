import React from 'react';

const SearchBox = ({searchfield, searchChange}) =>{
    return(
        <div class="pa2 tc">
            <input class='pa3 ba b--green bg-lightest-blue f6'
             type="search" 
             placeholder="Search robots"
             onChange={searchChange} />
        </div>
    );
}

export default SearchBox;