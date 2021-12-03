import React, {useState, useEffect} from 'react';
import WriteForm from './WriteForm';
import MessageList from './MessageList';
import styles from './assets/scss/Guestbook.scss';

import data from './assets/json/data.json';

export default function Guestbook() {
    const [messages, setMessages] = useState(data);

    // useEffect(() => {
    //     console.log('최초 메세지 리스트 가져오기');        
    //     fetchMessageList();
    // }, []);

    const notifyMessage = {
        add: function(message) {
            console.log('ajax posting.....');
            // 성공했다 가정
            message.no = 10;
            message.password = '';
            // ...messages 배열안에있는걸 하나하나 분리시켜준다[1,2,3,4]
            setMessages([message, ...messages]); // 앞에 글추가가된다
            setMessages([...messages,message]); // 뒤에 글 추가된다.
        },
        delete: function(no) {
            setMessages(messages.filter(message => message.no !== no));
        }
    }

    // const fetchMessageList = () => {
    //     console.log('message list 가져오기');
    // };

    return (
        <div className={styles.ScrollOuter}>
            <div>
                <div className={styles.Guestbook}>
                    <h1>방명록</h1>
                    <WriteForm notifyMessage={notifyMessage}/>
                    <MessageList messages={messages} notifyMessage={notifyMessage}/>
                </div>
            </div>
        </div>
    );
}