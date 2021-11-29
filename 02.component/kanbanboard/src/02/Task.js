import React from 'react';

export default function({tasks}){
    return(
       
        <li className='TaskList__Task'>
            <input type='checkbox' checked='true' />
                 {`ContactList Example`}
                  <a href='#' className='TaskList__Task--remove'></a>
         </li>
        
    );
}