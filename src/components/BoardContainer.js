import React, { useState } from 'react';
import BoardColumn from './BoardColumn';

const initialColumns = {
    frontend : [
        {
        title : "Complete List Component",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laboriosam architecto delectus autem natus veritatis repellat officiis? Voluptates ex tenetur molestiae et, esse nemo. Cupiditate, placeat animi labore facilis harum debitis sunt officia dolorem voluptatibus impedit fugit natus. Sed, provident? Adipisci minima quibusdam a tempore explicabo aliquid doloremque vel corporis."
        },
        {
        title : "Complete List Component",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laboriosam architecto delectus autem natus veritatis repellat officiis? Voluptates ex tenetur molestiae et, esse nemo. Cupiditate, placeat animi labore facilis harum debitis sunt officia dolorem voluptatibus impedit fugit natus. Sed, provident? Adipisci minima quibusdam a tempore explicabo aliquid doloremque vel corporis."
        },
        {
        title : "Complete List Component",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laboriosam architecto delectus autem natus veritatis repellat officiis? Voluptates ex tenetur molestiae et, esse nemo. Cupiditate, placeat animi labore facilis harum debitis sunt officia dolorem voluptatibus impedit fugit natus. Sed, provident? Adipisci minima quibusdam a tempore explicabo aliquid doloremque vel corporis."
        },
    ],
    backend : [
        {
        title : "Complete List Component",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laboriosam architecto delectus autem natus veritatis repellat officiis? Voluptates ex tenetur molestiae et, esse nemo. Cupiditate, placeat animi labore facilis harum debitis sunt officia dolorem voluptatibus impedit fugit natus. Sed, provident? Adipisci minima quibusdam a tempore explicabo aliquid doloremque vel corporis."
        },
        {
        title : "Complete List Component",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laboriosam architecto delectus autem natus veritatis repellat officiis? Voluptates ex tenetur molestiae et, esse nemo. Cupiditate, placeat animi labore facilis harum debitis sunt officia dolorem voluptatibus impedit fugit natus. Sed, provident? Adipisci minima quibusdam a tempore explicabo aliquid doloremque vel corporis."
        },
        {
        title : "Complete List Component",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laboriosam architecto delectus autem natus veritatis repellat officiis? Voluptates ex tenetur molestiae et, esse nemo. Cupiditate, placeat animi labore facilis harum debitis sunt officia dolorem voluptatibus impedit fugit natus. Sed, provident? Adipisci minima quibusdam a tempore explicabo aliquid doloremque vel corporis."
        },
    ]     
}

const BoardContainer = props => {

    const [columns, setColumns] = useState(initialColumns);

    const addCardToColumn = (columnName, cardTitle, cardDescription) => {
        const updatedArray = [...columns[columnName], {title : cardTitle, description : cardDescription}]
        const updatedColumns = {...columns};
        updatedColumns[columnName] = updatedArray;
        setColumns(updatedColumns);
    }

    const modifyCard = (columnName, cardTitle, cardDescription, index) => {
        const updatedCard = [...columns[columnName]][index]
        updatedCard["title"] = cardTitle;
        updatedCard["description"] = cardDescription;
        const updatedColumns = {...columns};
        updatedColumns[columnName][index] = updatedCard;
        setColumns(updatedColumns);
    }

    const deleteCard = (columnName, index) => {
        const updatedColumns = {...columns};
        updatedColumns[columnName].splice(index, 1);
        setColumns(updatedColumns);
    }

    const renderColumns = () => {
        const keys = Object.keys(columns);
        return (
            keys.map(key => {
                return (
                    <BoardColumn cards={columns[key]} columnTitle={key} key={key} addCardToColumn={addCardToColumn} modifyCard={modifyCard} deleteCard={deleteCard}/>
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