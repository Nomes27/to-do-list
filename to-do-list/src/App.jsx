import React from "react";
// import logo from './logo.svg';
import "./App.css";
import ItemAdder from "./itemAdder";

class App extends React.Component {
  state = {
    list: [
      { name: "make tea", done: false, dueDate: "10/12/2020" },
      { name: "coding task", done: false, dueDate: "10/11/2020" },
    ],
  };

  addListItem = (listItem, dueDate) => {
    this.setState((previousState) => {
      return {
        list: [
          ...previousState.list,
          { name: listItem, done: false, dueDate: dueDate },
        ],
      };
    });
  };

  removeListItem = (event) => {
    const selectedItem = event.target.innerText;
    console.log(selectedItem);
    this.setState((previousState) => {
      return {
        list: previousState.list.map((item) => {
          if (item.name === selectedItem) {
            const copyItem = { ...item };
            copyItem.done = !copyItem.done;
            return copyItem;
          } else {
            return item;
          }
        }),
      };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To Do List</h1>
        </header>

        <ul>
          {this.state.list.map((item) => {
            if (item.done === true) {
              return (
                <li key={item.name}>
                  <button className="strike" onClick={this.removeListItem}>
                    {item.name}
                  </button>
                  <p className="strike-date">{item.dueDate}</p>
                </li>
              );
            } else {
              return (
                <li key={item.name}>
                  <button onClick={this.removeListItem}>{item.name}</button>
                  <p>{item.dueDate}</p>
                </li>
              );
            }
          })}
        </ul>
        <ItemAdder addListItem={this.addListItem} />
      </div>
    );
  }
}

export default App;
