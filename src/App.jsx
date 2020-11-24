import React from "react";
// import logo from './logo.svg';
import "./App.css";
import ItemAdder from "./itemAdder";

class App extends React.Component {
  state = {
    list: [],
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
  clearList = () => {
    this.setState({ list: [] });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To Do List</h1>
        </header>
        <button onClick={this.clearList}>Clear List</button>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Date Due</th>
            </tr>
          </thead>

          {this.state.list.map((item) => {
            if (item.done === true) {
              return (
                <tbody>
                  <tr key={item.name} className="list-item-container">
                    <td>
                      {" "}
                      <button
                        className="list-item-container--strike"
                        onClick={this.removeListItem}
                      >
                        {item.name}
                      </button>
                    </td>

                    <td className="due-date-text--strike">{item.dueDate}</td>
                  </tr>
                </tbody>
              );
            } else {
              return (
                <tbody key={item.name}>
                  <tr className="list-item-container">
                    <td>
                      <button onClick={this.removeListItem}>
                        {" "}
                        {item.name}
                      </button>
                    </td>

                    <td className="due-date-text">{item.dueDate}</td>
                  </tr>
                </tbody>
              );
            }
          })}
        </table>
        <ItemAdder addListItem={this.addListItem} />
      </div>
    );
  }
}

export default App;
