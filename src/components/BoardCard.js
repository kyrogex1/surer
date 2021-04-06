import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Draggable } from 'react-beautiful-dnd';
import './BoardCard.css';

const BoardCard = props => {

    const [show, setShow] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");

    const handleOnEditClick = () => {
        setShow(true);
        setNewTitle(props.card.title);
        setNewDescription(props.card.description);
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

    const draggableFunc = (provided, snapshot) => {
        
        return (
            <div 
            className={`card mb-3 p-2 ${snapshot.isDragging ? "bg-success" : ""} boardCard`}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            >
                <div className="d-flex">
                    <h6 className="card-title my-1 mr-auto flex-grow-1">{props.card.title}</h6>
                    <div className="btn-group-sm btnGroupVisibleOnHover flex-shrink-0">
                        <button className="btn">
                            <i className="far fa-trash-alt my-auto"
                            style={{color : "red"}}
                            onClick={handleOnDeleteClick}
                            />
                        </button>
                        <button className="btn">
                            <i className="fas fa-pencil-alt my-auto ml-2"
                            style={{color : "blue"}}
                            onClick={handleOnEditClick} 
                            />
                        </button>
                    </div>
                </div>
            </div>

        )
    }

    return (
        <React.Fragment>
            <Draggable draggableId={props.card.id} index={props.index}>
                {draggableFunc}
            </Draggable>
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