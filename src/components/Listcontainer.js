import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';


class Todo extends Component {

    componentWillMount() {

        this._handleClick = this._handleClick.bind(this);
    }
    _handleClick(item) {
        this.props.handleClick(item.target.value);
    }

    render() {
        const lists = this.props.shoppingLists.map((list, key) => {
            return (
                <ListGroupItem onClick={this._handleClick} key={key} value={key} >{list.name}</ListGroupItem>
            )
        });
        return (
            <ListGroup>
                {lists}
            </ListGroup>
        )
    }
}

export default Todo;