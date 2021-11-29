import React from 'react';
import Task from './Task';

export default function({tasks}){
    return(
        <div className='TaskList'>
            <ul>
                {tasks.map((tasks) => <Task 
                                        key={Task.no} 
                                        naem={Task.name} />)}
            </ul>
         </div>
    );
}