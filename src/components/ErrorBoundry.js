import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  // similar to try-catch block in JS 
  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooops. That is not good. Error!</h1>
    }
    //wrapping around CardList in App.js and will catch errors in cardlist 
    // CardList will be the child
    return this.props.children
  }

}



export default ErrorBoundary