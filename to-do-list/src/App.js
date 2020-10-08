import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ItemAdder from './itemAdder';


class App extends React.Component {

  state = {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Our To Do List</h1>
        </header>

        <ItemAdder />
      </div>
    );
  }


}

export default App;
