import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
              <ListContainer shoppingLists={this.state.shoppingLists} />
            </Col>
            <Col sm={12} md={8}>
              <ItemContainer shoppingList={this.state.shoppingLists[this.state.selectedList]} />
              
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default App;
