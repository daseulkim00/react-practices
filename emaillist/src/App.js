import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import EmailList from './EmailList';

import './assets/scss/App.scss'; 
import data from './assets/json/data.json';

//  module:true로 했지만 hashing 하고 싶지 않을때  scss에서 클래스나 아이디 이름에:global()로 적어주고 사용
export default function(){
  // 부모가 자식한테 값 전달
  const [keyword,setKeyword] = useState('');

  // 자식한테 데이터를 보낼께 있으면 보내달라고 알리는 함수 만들기
  const notifyKeywordChanged =(keyword) =>{
    //console.log(keyword);
    // 부모가 자식한테 값 보내주는거
    setKeyword(keyword);
  };

  // keyword 가 상태로 들어가 있어야 한다. 그래야 자식한테 떨어진다.
  return(
    <div className={'App'}>
      <RegisterForm /> 
      <SearchBar keyword={keyword} callback={notifyKeywordChanged} />
      <EmailList keyword={keyword} emails={data} />
      
    </div>
  )
}