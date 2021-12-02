import React from 'react';
import Form from './Form';
import List from './List';
// import Delete from'./Delete';
// import Message from'./Message';

export default function() {
    return (
        <div id='App'>
            <h1>방명록</h1>
            <Form></Form>
            <List></List>
            {/* <Delete></Delete>
            <Message></Message> */}
        </div>
    )
}