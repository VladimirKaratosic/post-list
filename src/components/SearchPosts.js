import React from 'react'

function SearchPosts({searchingPosts, setLoader}) {

    const searchHandler = (e) => {
        var searchedTerm = e.target.value;
        var regex = /[^\w\s]/gmi;
        if( searchedTerm.match(regex)) {
            setLoader(false);
            return null;            
        } else {            
            searchingPosts(searchedTerm);                       
        }                
    }

    const handlerKeyDown = () => {
        setLoader(true); 
        setTimeout(() => {
            setLoader(false); 
        }, 1000)
        
    }

    return (
        <div className="input-field col s12 m10 offset-m1 l8 red-text valign-wrapper">                
            <i className="cyan-text material-icons prefix small">search</i>
            <input type="text" placeholder="search" pattern="[A-Za-z]+\s*\d*" title="Only letters, digits and whitespaces" required id="autocomplete-input" className="cyan-text" onChange={searchHandler} onKeyDown={handlerKeyDown} />                
        </div>
    )
}

export default SearchPosts
