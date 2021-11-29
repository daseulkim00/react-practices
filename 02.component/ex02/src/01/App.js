import React from 'react';
 
export default function() {
    const h1style ={
        width:280,
        height:50,
        padding:5,
        color:'#111',
        backgroundColor:'#EEFF99'
    }

    return (
        <div id='App'>
          <h1 style={h1style}>Inline styling</h1>
        </div>
    )
}