import React from 'react';

class ItemAdder extends React.Component {

  state = {

  }


  render() {
    return <form>
      <label htmlFor="list-item">
        Input Item:
</label>
      <input name="list-item" id="list-item" type="text" />
    </form>
  }
}


export default ItemAdder