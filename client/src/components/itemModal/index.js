import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../../actions/itemActions';

const ItemModal = ({props}) => {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');

    const handleToggle = () => setModal(!modal);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            name
        };
        // Add item via addItem action
        addItem(newItem);
        // Close modal
        handleToggle();
    }

    const handleChangeName = (e) => {
        setName({
            [e.target.name]: e.target.value
        })
    }
    return(
        <div>
            <Button
            color="dark"
            style={{ marginBottom: '2rem' }}
            onClick={handleToggle}
            >
            Add Item
            </Button>
            <Modal isOpen={modal} toggle={handleToggle}>
                <ModalHeader toggle={handleToggle}>Add To Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={handleOnSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add shopping item"
                                    value={name}
                                    onChange={handleChangeName}
                                />
                                <Button color="dark" style={{ marginTop: '2rem' }} block>
                                    Add Item
                                </Button>
                            </FormGroup>
                    </Form>
                    </ModalBody>
            </Modal>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: () => dispatch(addItem)
    }
}

export default connect(null, mapDispatchToProps)(ItemModal);