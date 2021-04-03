import React, { useState } from 'react';
import BoardCard from './BoardCard';
import { Modal, Button } from 'react-bootstrap';
import { Droppable } from 'react-beautiful-dnd';

const BoardColumn = props => {

    const [isDraggingOver, setIsDraggingOver] = useState(false);
    const [show, setShow] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");
    
    const renderBoardCards = () => {
        return (
            props.column.cards.map((card, index) => {
                return (
                    <BoardCard
                    key={card.id}
                    card={card}
                    index={index}
                    modifyCard={(cardTitle, cardDescription) => {
                        props.modifyCard(props.columnIndex, cardTitle, cardDescription, index)
                    }}
                    deleteCard={() => props.deleteCard(props.columnIndex, index)}
                    />
                ) 
            })
        )
    }

    const handleAddCardToColumn = () => {
        setShow(false);
        setNewTitle("");
        setNewDescription("");

        props.addCardToColumn(props.columnIndex, newTitle, newDescription);
    }

    const droppableFunc = (provided, snapshot) => {
        setIsDraggingOver(snapshot.isDraggingOver);

        return (
            <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            >
                {renderBoardCards()}
            {provided.placeholder}
            </div>
        )
    }

    return (
        <div className="mx-3">
            <div className={`card ${isDraggingOver ? "bg-warning" : "bg-light"}`} style={{width : "18rem"}}>
                <div className="card-body">
                    <div className="d-flex">
                        <h5 className="card-title mb-2 mr-auto">{props.column.columnTitle}</h5>
                        <i className="far fa-trash-alt my-auto" style={{color : "red"}}/>
                    </div>
                    <Droppable droppableId={props.column.id}>
                        {droppableFunc}
                    </Droppable>
                    <div className="card p-2" onClick={() => setShow(true)}>
                        <h6 className="card-title my-1 mr-auto text-success">
                            Add New Card
                            <i className="fas fa-plus ml-2" />
                        </h6>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{`New card to ${props.column.columnTitle}`}</Modal.Title>
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