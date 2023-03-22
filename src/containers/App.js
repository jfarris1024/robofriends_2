import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundry';
import '../containers/App.css';



class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  // fetch user list, get response, then getting users and updating them with setState
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  // random name we created so use arrow functions. 
  // Want to function to  everytime the input changes we get an event
  onSearchChange = (event) => {
    // anytime you want to change state, start with this 
    this.setState({ searchfield: event.target.value })

  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    //if no robots, robots.length -> false. ! turns to true so we return 'Loading'
    // ternary 
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc' >
          <h1 className='f1'>RoboFriends v2</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }


}


export default App;