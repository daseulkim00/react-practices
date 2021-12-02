import React, { useState } from 'react';
import styles from './assets/scss/RegisterForm.scss'; 

export default function({callback}){
    
    return(
        <form className={styles.RegisterForm} 
              onSubmit = {(e) => {
                  e.preventDefault(),
                 callback(
                     {
                  "firstName" :e.target.firstName.value,
                  "lastName" : e.target.lastName.value,
                  "email" : e.target.email.value})
                  }}>
            <input type='text' id='firstName' placeholder="성" className={styles.InputFirstName} />
            <input type='text' id='lastName' placeholder="이름" className={styles.InputLastName} />
            <input type='text' id='email' placeholder="이메일" className={styles.InputEmail} />
            <input type='submit' value="등록" />

        </form>
    )
  }