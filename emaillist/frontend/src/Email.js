import React, { useCallback } from 'react';
import styles from './assets/scss/Email.scss';

const Email = ({firstName, lastName, email, listno, onRemove}) => {
    return (
        <li className={styles.Email}>
            <a onClick={(e)=>{
                e.preventDefault(),
                onRemove(listno)}}/>
            <h4>
                {email}
            </h4>
            <span>
                {`${firstName} ${lastName}`}
            </span>
         </li>
    );
};

export default Email;