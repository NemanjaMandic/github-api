import React, { Component } from 'react';

class SearchBar extends Component {
    
    state = {
        term: ''
    }
    onInputChange = (event) => {
       // console.log(event.target.value);
        this.setState({
            term: event.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render() { 
        return ( 
            <div className="ui segment">
            <h1>{this.state.term}</h1>
             <form onSubmit={this.onFormSubmit} className="ui form">
             <h3>Ovde Logo</h3>
                 <div className="field">
                 
                 <input type="text" value={this.state.term} placeholder="Search" onChange={ this.onInputChange }/>
                 </div>
             </form>
            </div>
         );
    }
}

 
export default SearchBar;