import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const BoardCard = props => {

    const [show, setShow] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");

    const handleOnEditClick = () => {
        setShow(true);
        setNewTitle(props.cardTitle);
        setNewDescription(props.cardDescription);
    }

    const handleOnEditSave = () => {
        setShow(false);
        props.modifyCard(newTitle, newDescription);
    }

    const handleOnDeleteClick = () => {
        if (window.confirm("Confirm delete this entry ?")) {
            props.deleteCard();
        }
    }

    return (
        <React.Fragment>
            <div class="card mb-3 p-2">
                <div class="d-flex">
                    <h6 class="card-title my-1 mr-auto">{props.cardTitle}</h6>
                    <i class="far fa-trash-alt my-auto"
                    style={{color : "red"}}
                    onClick={handleOnDeleteClick}
                    />
                    <i class="fas fa-pencil-alt my-auto ml-2"
                    style={{color : "red"}}
                    onClick={handleOnEditClick}
                    />
                </div>
            </div>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{`Editting card`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group">
                        <label>Card Title</label>
                        <input className="form-control" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Card Description</label>
                        <input className="form-control" value={newDescription} onChange={e => setNewDescription(e.target.value)} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleOnEditSave}>
                        Edit Card
                    </Button>
                </Modal.Footer>
            </Modal>
        </ React.Fragment>
    );
}

export default BoardCard;