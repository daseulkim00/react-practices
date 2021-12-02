import React from 'react';
import RegisterForm from './RegisterForm';

import './assets/scss/App.scss'; 

//  module:true로 했지만 hashing 하고 싶지 않을때  scss에서 클래스나 아이디 이름에:global()로 적어주고 사용
export default function(){
  return(
    <div className={'App'}>
      <RegisterForm></RegisterForm>
      
    </div>
  )
}