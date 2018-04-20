import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class Itemcontainer extends Component {
    render() {
        const items = this.props.shoppingList.items.map((list, key) => {
            return (
                <ListGroupItem key={key}>{list.name}</ListGroupItem>
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
