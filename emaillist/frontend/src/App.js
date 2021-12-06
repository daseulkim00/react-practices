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
  const [emaillist,setemaillist] = useState(data);
  

 
  // 자식한테 데이터를 보낼께 있으면 보내달라고 알리는 함수 만들기
  const notifyKeywordChanged =(keyword) =>{
    //console.log(keyword);
    
    setKeyword(keyword);
    
  };

  const setFormChanged =(add) => {
    add.no = emaillist.length +1  // 내가 배열 추가해주면 그 게시물이 원래게시물 배열의 +1 - 삭제할때 no 넘겨주기위해서 사용

    setemaillist(emaillist.concat(add));  // 배열추가

    //   console.log(setemaillist);
    //  console.log(a);
    }

    const onRemove = (no) => {
      setemaillist(emaillist.filter(user => user.no !== no))
    };

  // keyword 가 상태로 들어가 있어야 한다. 그래야 자식한테 떨어진다.
  return(
    <div className={'App'}>
      <RegisterForm callback={setFormChanged} /> 
      <SearchBar keyword={keyword} callback={notifyKeywordChanged} />
      <EmailList keyword={keyword} emails={emaillist} onRemove={onRemove}/>
      
    </div>
  )
}