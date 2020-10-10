import React from "react";
import "./App.css";
class ItemAdder extends React.Component {
  state = {
    listItem: "",
    dueDate: "",
  };

  handleUpdate = (event) => {
    const listItem = event.target.name;
    const value = event.target.value;
    this.setState(() => {
      return {
        [listItem]: value,
      };
    });
  };

  render() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          this.props.addListItem(this.state.listItem, this.state.dueDate);
          this.setState({ listItem: "", dueDate: "" });
        }}
      >
        <label htmlFor="list-item">Input Item:</label>
        <input
          className="input-form"
          name="listItem"
          id="list-item"
          type="text"
          onChange={this.handleUpdate}
          value={this.state.listItem}
        />
        <label htmlFor="due-date">Date due:</label>
        <input
          className="input-form"
          name="dueDate"
          id="due-date"
          type="date"
          onChange={this.handleUpdate}
        ></input>

        <button className="add">Add a list item</button>
      </form>
    );
  }
}

export default ItemAdder;
