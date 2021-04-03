import React, { useState } from 'react';
import BoardColumn from './BoardColumn';
import {v4 as uuid} from 'uuid';

const initialColumns = [
    {   id : uuid(),
        columnTitle : "frontend",
        cards : [
            {
            id : (uuid()),
            title : "Complete List Component",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laboriosam architecto delectus autem natus veritatis repellat officiis? Voluptates ex tenetur molestiae et, esse nemo. Cupiditate, placeat animi labore facilis harum debitis sunt officia dolorem voluptatibus impedit fugit natus. Sed, provident? Adipisci minima quibusdam a tempore explicabo aliquid doloremque vel corporis."
            },
            {
            id : (uuid()),
            title : "Complete List Component",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laboriosam architecto delectus autem natus veritatis repellat officiis? Voluptates ex tenetur molestiae et, esse nemo. Cupiditate, placeat animi labore facilis harum debitis sunt officia dolorem voluptatibus impedit fugit natus. Sed, provident? Adipisci minima quibusdam a tempore explicabo aliquid doloremque vel corporis."
            },
            {
            id : (uuid()),
            title : "Complete List Component",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laboriosam architecto delectus autem natus veritatis repellat officiis? Voluptates ex tenetur molestiae et, esse nemo. Cupiditate, placeat animi labore facilis harum debitis sunt officia dolorem voluptatibus impedit fugit natus. Sed, provident? Adipisci minima quibusdam a tempore explicabo aliquid doloremque vel corporis."
            },
        ]
    },
    {   id : uuid(),
        columnTitle : "Backend",
        cards : [
            {
            id : (uuid()),
            title : "Complete List Component",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laboriosam architecto delectus autem natus veritatis repellat officiis? Voluptates ex tenetur molestiae et, esse nemo. Cupiditate, placeat animi labore facilis harum debitis sunt officia dolorem voluptatibus impedit fugit natus. Sed, provident? Adipisci minima quibusdam a tempore explicabo aliquid doloremque vel corporis."
            },
            {
            id : (uuid()),
            title : "Complete List Component",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laboriosam architecto delectus autem natus veritatis repellat officiis? Voluptates ex tenetur molestiae et, esse nemo. Cupiditate, placeat animi labore facilis harum debitis sunt officia dolorem voluptatibus impedit fugit natus. Sed, provident? Adipisci minima quibusdam a tempore explicabo aliquid doloremque vel corporis."
            },
            {
            id : (uuid()),
            title : "Complete List Component",
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
        <div className="w-100 d-flex mt-4">
            {renderColumns()}
        </div>
    )
}

export default BoardContainer;