import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
class App extends Component {
  
  state = {
    term: '',
    isLoading: true,
    users: [],
    error: null
  }
  componentDidMount(){
    this.fetchUsers();
  }

  fetchUsers() {
    // Where we're fetching data from
    fetch(`https://api.github.com/users?since=15`)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data => {

        console.log(data);
        this.setState({
          users: data
        })
      }
        
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }
  onSearchSubmit = (term) => {
    
    
  }

  render(){
    
    const { users } = this.state;
    console.log('kurcina', users);
   
    return (
      <div className="App ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        
         {users.map(user => {
           const followers = user.followers_url;
           return(
           
             <div style={{border: "1px solid black", marginBottom: "20px"}}>
                <a href={user.html_url}>
               <p>{user.login}</p>
               <img src={user.avatar_url} alt={user.login} />
               </a>
               
             </div>
            
           )
           })}
        
      </div>
    );
  }
}

export default App;
