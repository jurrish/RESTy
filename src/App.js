import React from 'react';

import './styles.scss';

class Header extends React.Component {
  render() {
    return <header><h1>Hello!</h1></header>
  }
}

function Footer () {
    return <footer><p></p>&copy; 2018</footer>
}

class Words extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      words: '',
      count: 0
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    alert('Hello!');
  }

  handleWordChange = (event) => {
    let words = event.target.value;
    let count = words.length;
    this.setState({ words, count });
  }

  render(){
    return (
      <form>
        <h2>{ this.state.words } <span>{ this.state.count }</span></h2>
        <input onChange={ this.handleWordChange }/>
        <button onClick={ this.handleClick }>click me!</button>
      </form>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Words />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
