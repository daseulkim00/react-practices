import React, {useState, useEffect} from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

import './assets/scss/App.scss';
// import data from './assets/json/data.json';

export default function() {
    const [emails, setEmails] = useState([]);
    const [keyword, setKeyword] = useState('');

    const notifyKeywordChanged = (keyword) => {
      setKeyword(keyword);
    };

    useEffect(async () => {
      try {
        const response = await fetch('http://localhost:8888/api', {
          method: 'get',
          mode: 'cors',                    // no-cors, cors - 서버에 cors설정을 해놨는지아닌지 알 수 있다, same-origin*
          credentials:'same-origin',       // 인증 include, omit, same-origin*
          cache:'no-cache',                // no-cache, reload, 
          headers: {
            'Content-Type': 'application/json',  //cf. application/x-www-form-urlencoded
            'Accept': 'application/json'
          },
          redirect: 'follow',              // follow*, error, manual(rexponse.url)
          referrer: 'client',              // no-referrer, *client  구글검색에서 들어왓다 이런것들을 알수 있는 것
          body: null
        });

        if(!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        const jsonResult = await response.json();

        if(jsonResult.result !== 'success') {
          throw new Error(`${jsonResult.result} ${jsonResult.message}`);
        }

        setEmails(jsonResult.data);

      } catch (err) {
        console.error(err);
      }
    }, []);

    return (
        <div className={'App'}>
          <RegisterForm />
          <SearchBar keyword={keyword} callback={notifyKeywordChanged} />
          <Emaillist keyword={keyword} emails={emails} />  
        </div>
    )
}