import React, { useState } from 'react';
import BoardColumn from './BoardColumn';
import {v4 as uuid} from 'uuid';
import { DragDropContext } from 'react-beautiful-dnd';

const initialColumns = [
    {   id : uuid(),
        columnTitle : "frontend",
        cards : [
            {
            id : (uuid()),
            title : "Task 1",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laboriosam architecto delectus autem natus veritatis repellat officiis? Voluptates ex tenetur molestiae et, esse nemo. Cupiditate, placeat animi labore facilis harum debitis sunt officia dolorem voluptatibus impedit fugit natus. Sed, provident? Adipisci minima quibusdam a tempore explicabo aliquid doloremque vel corporis."
            },
            {
            id : (uuid()),
            title : "Task 2",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laboriosam architecto delectus autem natus veritatis repellat officiis? Voluptates ex tenetur molestiae et, esse nemo. Cupiditate, placeat animi labore facilis harum debitis sunt officia dolorem voluptatibus impedit fugit natus. Sed, provident? Adipisci minima quibusdam a tempore explicabo aliquid doloremque vel corporis."
            },
            {
            id : (uuid()),
            title : "Task 3",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laboriosam architecto delectus autem natus veritatis repellat officiis? Voluptates ex tenetur molestiae et, esse nemo. Cupiditate, placeat animi labore facilis harum debitis sunt officia dolorem voluptatibus impedit fugit natus. Sed, provident? Adipisci minima quibusdam a tempore explicabo aliquid doloremque vel corporis."
            },
        ]
    },
    {   id : uuid(),
        columnTitle : "Backend",
        cards : [
            {
            id : (uuid()),
            title : "Task 4",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laboriosam architecto delectus autem natus veritatis repellat officiis? Voluptates ex tenetur molestiae et, esse nemo. Cupiditate, placeat animi labore facilis harum debitis sunt officia dolorem voluptatibus impedit fugit natus. Sed, provident? Adipisci minima quibusdam a tempore explicabo aliquid doloremque vel corporis."
            },
            {
            id : (uuid()),
            title : "Task 5",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laboriosam architecto delectus autem natus veritatis repellat officiis? Voluptates ex tenetur molestiae et, esse nemo. Cupiditate, placeat animi labore facilis harum debitis sunt officia dolorem voluptatibus impedit fugit natus. Sed, provident? Adipisci minima quibusdam a tempore explicabo aliquid doloremque vel corporis."
            },
            {
            id : (uuid()),
            title : "Task 6",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laboriosam architecto delectus autem natus veritatis repellat officiis? Voluptates ex tenetur molestiae et, esse nemo. Cupiditate, placeat animi labore facilis harum debitis sunt officia dolorem voluptatibus impedit fugit natus. Sed, provident? Adipisci minima quibusdam a tempore explicabo aliquid doloremque vel corporis."
            },
        ]
    },
]

const BoardContainer = props => {
    const [columns, setColumns] = useState(initialColumns);

    const addCardToColumn = (columnIndex, cardTitle, cardDescription) => {
        const updatedArray = [...columns[columnIndex].cards, {id : uuid(), title : cardTitle, description : cardDescription}];
        const updatedColumns = [...columns];
        updatedColumns.splice(columnIndex, 1, {...columns[columnIndex], cards : updatedArray});
        setColumns(updatedColumns);
    }

    const modifyCard = (columnIndex, cardTitle, cardDescription, cardIndex) => {
        const updatedColumns = [...columns];
        updatedColumns[columnIndex].cards[cardIndex].title = cardTitle;
        updatedColumns[columnIndex].cards[cardIndex].description = cardDescription;
        console.log(updatedColumns);
        setColumns(updatedColumns);
    }

    const deleteCard = (columnIndex, cardIndex) => {
        const updatedColumns = [...columns];
        updatedColumns[columnIndex].cards.splice(cardIndex, 1);
        setColumns(updatedColumns);
    }

    const onDragEnd = ({source, destination}) => {
        const updatedColumns = [...columns]
        const sourceColumn = updatedColumns.find(column => column.id === source.droppableId);
        const sourceItem = sourceColumn.cards[source.index];
        
        if (source.droppableId === destination.droppableId)
            if (source.index === destination.droppableId)
                return;
            else {
                sourceColumn.cards.splice(source.index, 1);
                sourceColumn.cards.splice(destination.index, 0, sourceItem);
            }
        else {
            sourceColumn.cards.splice(source.index, 1);
            const destinationColumn = updatedColumns.find(column => column.id === destination.droppableId);
            destinationColumn.cards.splice(destination.index, 0, sourceItem);
        }
        setColumns(updatedColumns);

    }

    const renderColumns = () => {
        return (
            columns.map((column, index) => {
                return (
                    <BoardColumn column={column} columnIndex={index} key={column.id} addCardToColumn={addCardToColumn} modifyCard={modifyCard} deleteCard={deleteCard}/>
                )
            })
        )
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="w-100 d-flex mt-4">
                {renderColumns()}
            </div>
        </DragDropContext>
    )
}

export default BoardContainer;