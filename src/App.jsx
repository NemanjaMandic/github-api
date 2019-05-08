import React, {Component} from 'react';
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

  onInputChange = (event) => {
     console.log(event.target.value);
     this.setState({
         term: event.target.value
     })
 }

  filterResults = (arr, query) => {
    return arr.filter(user => user.login.startsWith(query));
  }
  onSearchSubmit = (event) => {
    event.preventDefault();
    const { term, users} = this.state
    console.log(term)
    console.log('DIK', users.filter(u => u.login.startsWith(term)))
    const filteredUsers = this.filterResults(users, term);

    console.log('FILTERED', filteredUsers);
    if(term === ''){
      this.setState({
        users
      })
    }
    this.setState({
      users: [...filteredUsers]
    })
    
  }

  render(){
    
    const { users } = this.state;
    console.log('kurcina', users);
   
    return (
      <div className="App ui container">
        <SearchBar onSubmit={this.onSearchSubmit} onInputChange={this.onInputChange} />
        
         {users.map(user => {
           
           return(
           
             <div style={{border: "1px solid black", marginBottom: "20px"}} key={user.id}>
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
