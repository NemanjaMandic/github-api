import React, { Component } from 'react';

const SearchBar = ({onInputChange, onSubmit, term}) => {
    


    // onFormSubmit = (event) => {
    //     event.preventDefault();
    //     this.props.onSubmit(this.state.term);
    // }
  
        return ( 
            <div className="ui segment">
             <form onSubmit={onSubmit} className="ui form">
             <h3>Ovde Logo</h3>
                 <div className="field">
                 
                 <input type="text" value={term} placeholder="Search" onChange={ onInputChange }/>
                 </div>
             </form>
            </div>
         );
    
}

 
export default SearchBar;