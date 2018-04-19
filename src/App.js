import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContainer from './components/Listcontainer'
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  componentWillMount() {
    this.state = {
      selectedList: null,
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
    };
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
              fdsa
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default App;
