import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';


class Todo extends Component {

    componentWillMount() {

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
    }

    render() {
        const lists = this.props.shoppingLists.map(list => {
            return (
                <ListGroupItem>{list.name}</ListGroupItem>
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