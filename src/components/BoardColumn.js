import React, { useState } from 'react';
import BoardCard from './BoardCard';
import { Modal, Button } from 'react-bootstrap';

const BoardColumn = props => {

    const [show, setShow] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");
    
    const renderBoardCards = () => {
        return (
            props.cards.map((card, index) => {
                return (
                    <BoardCard
                    cardTitle={card.title}
                    cardDescription={card.description}
                    modifyCard={(cardTitle, cardDescription) => {
                        props.modifyCard(props.columnTitle, cardTitle, cardDescription, index)
                    }}
                    deleteCard={() => props.deleteCard(props.columnTitle, index)}
                    />
                ) 
            })
        )
    }

    const handleAddCardToColumn = () => {
        setShow(false);
        setNewTitle("");
        setNewDescription("");

        props.addCardToColumn(props.columnTitle, newTitle, newDescription);
    }

    return (
        <div className="mx-3">
            <div className="card bg-light" style={{width : "18rem"}}>
                <div className="card-body">
                    <div className="d-flex">
                        <h5 className="card-title mb-2 mr-auto">{props.columnTitle}</h5>
                        <i class="far fa-trash-alt my-auto" style={{color : "red"}}/>
                    </div>
                    {renderBoardCards()}
                    <div className="card p-2" onClick={() => setShow(true)}>
                        <h6 class="card-title my-1 mr-auto text-success">
                            Add New Card
                            <i class="fas fa-plus ml-2" />
                        </h6>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{`New card to ${props.columnTitle}`}</Modal.Title>
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
                    <Button variant="primary" onClick={handleAddCardToColumn}>
                        Add Card
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default BoardColumn;