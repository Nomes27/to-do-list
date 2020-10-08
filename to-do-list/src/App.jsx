import React from "react";
// import logo from './logo.svg';
import "./App.css";
import ItemAdder from "./itemAdder";

class App extends React.Component {
  state = {
    list: ["item1", "item2", "item3"],
  };

  addListItem = (listItem) => {
    this.setState((previousState) => {
      return {
        list: [...previousState.list, listItem],
      };
    });
  };

  removeListItem = (event) => {
    console.log(event.target);
    return <strike>{event.target}</strike>
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Our To Do List</h1>
        </header>
        <ul>
          {this.state.list.map((item) => {
            return <li onClick={this.removeListItem} key={item}>{item}</li>;
          })}
        </ul>
        <ItemAdder addListItem={this.addListItem} />
      </div>
    );
  }
}

export default App;
