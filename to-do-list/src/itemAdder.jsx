import React from "react";

class ItemAdder extends React.Component {
  state = {
    listItem: "",
  };

  handleUpdate = (event) => {
    //const listItem = event.target.name;
    const value = event.target.value;
    this.setState(() => {
      return {
        listItem: value,
      };
    });
  };

  render() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();

          this.props.addListItem(this.state.listItem);
          this.setState({ listItem: "" });
        }}
      >
        <label htmlFor="list-item">Input Item:</label>
        <input
          name="listItem"
          id="list-item"
          type="text"
          onChange={this.handleUpdate}
          value={this.state.listItem}
        />
        <label htmlFor="due-date">Date due:</label>
        <input name="due-date"></input>
        <button>Add a list item</button>
      </form>
    );
  }
}

export default ItemAdder;
