import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';


const ShoppingItem = (props) => {
    console.log(props)
    const { id, name } = props.item;
    const { handleDelete } = props;
    return(
        <ListGroupItem>
            <Button
                className="remove-btn"
                color="danger"
                size="sm"
                onClick={() => handleDelete(id)}
            >
            </Button>
            {name}
        </ListGroupItem>
    )
}

export default ShoppingItem;