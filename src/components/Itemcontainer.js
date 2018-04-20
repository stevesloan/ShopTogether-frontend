import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class Itemcontainer extends Component {
    componentWillMount() {
        this._handleClick = this._handleClick.bind(this);
    }
    _handleClick(item) {
        this.props.handleClick(item.target.value);
    }
    render() {
        
        const items = this.props.shoppingList.items.map((item, key) => {
            return (
                <ListGroupItem onClick={this._handleClick} value={key} key={key} active={item.done}>
                    {item.name}
                </ListGroupItem>
            )
        });
        return (
            <div>
                <h1>{this.props.shoppingList.name}</h1>
                <ListGroup>{items}</ListGroup>
            </div>
        )
    }
}
