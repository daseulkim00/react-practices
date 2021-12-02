import React from 'react';
import styles from './assets/css/Task.css';

export default function({name}){
    return(
       
        <li className={styles.Task}>
            <input type='checkbox' checked='true' />
                 {name}                          {/* -- 가 연산자라서 [''] 안에 써준다          */}
                  <a href='#' className={styles['Task--remove']}></a>
         </li>
        
    );
}

