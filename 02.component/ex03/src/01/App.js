import React from 'react';

export default function () {
    return (
        <h1
            // onClick={ function(e){console.log('click!')} }
            onClick={ (e) => {console.log('click!')} }
            style={{
                cursor: 'pointer'
            }}>
            ex03- Inline Handler</h1>
    );
}