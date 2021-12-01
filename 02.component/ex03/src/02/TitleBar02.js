import React from 'react';

export default function TitelBar02() {
    const onClickHandler = () => {
        console.log('TitleBar02 clicked');
    }

    return (
        <h1
            onClick = { onClickHandler }
            style={{cursor: 'pointer'}}>
            ex02 - Functional Event Handler(Functional Component)
        </h1>
    );
}