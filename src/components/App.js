import React, { useState } from 'react';
import Header from './Header';
import BoardContainer from './BoardContainer';

const App = props => {

    return (
        <div>
            <Header />
            <BoardContainer/>
        </div>
    );
}

export default App;