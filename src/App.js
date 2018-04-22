import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import ListContainer from './components/Listcontainer'
import ItemContainer from './components/Itemcontainer'
import { FormControl, Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  componentWillMount() {
    this.setState({
      selectedList: null,
      shoppingLists: [],
    });

    this.setSelectedList = this.setSelectedList.bind(this);
    this.setItemDone = this.setItemDone.bind(this);
    this.onAddList = this.onAddList.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
  }

  setSelectedList(selectedList) {
    this.setState({ selectedList });
  }
  setItemDone(itemId) {
    let newShoppingLists = this.state.shoppingLists;
    let item = newShoppingLists[this.state.selectedList].items[itemId];
    item.done = !item.done;
    this.setState({
      shoppingLists: newShoppingLists
    })
  }

  validate(input) {
    let success = true;
    if (input === "") {
      success = false;
    }
    return success;
  }

  onAddList(event) {
    event.preventDefault();
    const name = event.target.name.value;
    if (this.validate(name)) {
      let shoppingLists = this.state.shoppingLists;
      shoppingLists.push({ name, items: [] })
      this.setState({
        selectedList: shoppingLists.length - 1,
        shoppingLists
      });
      event.target.name.value = '';
    }

  }

  onAddItem(event) {
    event.preventDefault();
    const name = event.target.name.value;
    if (this.validate(name)) {
      let items = this.state.shoppingLists[this.state.selectedList].items;
      items.push({ name, done: false });
      this.setState({
        shoppingLists: this.state.shoppingLists
      });
      event.target.name.value = '';
    }
  }

  render() {
    let addItem;
    if (typeof this.state.shoppingLists[this.state.selectedList] !== "undefined") {
      addItem = (
        <form onSubmit={this.onAddItem}>
          <FormControl type="text" name="name" placeholder="New Item Name" />
        </form>
      )
    } else {
      addItem = (<FormControl type="text" disabled={true} placeholder="New Item Name" />);
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={4}>
              <ListContainer handleClick={this.setSelectedList} shoppingLists={this.state.shoppingLists} />
              <form onSubmit={this.onAddList}>
                <FormControl type="text" name="name" placeholder="New List Name" />
              </form>
            </Col>
            <Col sm={12} md={8}>
              <ItemContainer handleClick={this.setItemDone} shoppingList={this.state.shoppingLists[this.state.selectedList]} />
              {addItem}
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default App;
