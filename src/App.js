import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import ListContainer from './components/Listcontainer'
import ItemContainer from './components/Itemcontainer'
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  componentWillMount() {
    this.setState({
      selectedList: 1,
      shoppingLists: [
        {
          name: "First List",
          items: [{
            name: "Apples",
            done: false,
          }],
        },
        {
          name: "Second List",
          items: [{
            name: "Bananas",
            done: false,
          }, {
            name: "Plums",
            done: false,
          }],
        }
      ],
    });

    this.setSelectedList = this.setSelectedList.bind(this);
    this.setItemDone = this.setItemDone.bind(this);
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

  render() {
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
            </Col>
            <Col sm={12} md={8}>
              <ItemContainer handleClick={this.setItemDone} shoppingList={this.state.shoppingLists[this.state.selectedList]} />
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default App;
