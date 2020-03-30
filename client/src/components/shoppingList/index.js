import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, ListGroup } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types'
import ShoppingItem from './shoppingItem';
import { getItems, deleteItem } from '../../actions/itemActions';
import e from 'express';

const ShoppingList = (props) => {
    console.log(props)
    const { items } = props.items;
    useEffect(() => {
        getItems();
    },[]);

    const handleDelete = (id) => {
        deleteItem(id);
    }

    return(
        <Container>
            <ListGroup>
                <TransitionGroup className="shopping-list">
                {items.map((item) => (
                    <CSSTransition key={item.id} timeout={500} classNames="fade">
                        <ShoppingItem item={item} handleDelete={handleDelete} />
                    </CSSTransition>
                ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    )
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    items: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    console.log(state)
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(ShoppingList);