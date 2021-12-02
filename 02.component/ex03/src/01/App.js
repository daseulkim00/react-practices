import React from 'react';

export default function () {
    //const clickHandler = (e) => alert('clicked!!!!')
    return (
        <h1
            // onClick={ function(e){console.log('click!')} }
            // onClick ={clickHandler}
            onClick={ (e) => {console.log('click!')} }
            style={{
                cursor: 'pointer'
            }}>
            ex03- Inline Handler
        </h1>
    );
}