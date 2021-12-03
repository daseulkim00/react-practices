import React from 'react';
import PropTypes from 'prop-types';
import styles from './assets/scss/Message.scss';

export default function Message({no, name, message,notifyDeleteMessage}) {

    // notifyDeleteMessage 받아오고 밑에 코드 없애줌
    // const onDeleteClick = () => {
    //     console.log('click!!' + no);
    // }

    return (
        <li className={styles.Message}>
            <strong>{name}</strong>
            <p>
                {/* {message} */}
                {/*  
                아 배고프다.\n돈가스 땡김\n초밥 땡김\n치킨 땡김\nㅋㅋ
                ['아 배고프다.','돈가스 땡김','초밥 땡김','치킨 땡김']
                */}

                {/* index넣어줘도 키값이 안겹쳐서 사용해줘도된다 */}
                 {/* {"A\nB\nC\nD\n".split('\n').map((line,index) => {
                if(index != 0){
                    return <span key={index}><br/>{line}</span>
                }else{
                    return <span key={index}>{line}</span>
                } })}  */}

                {                                 // line= 글자 index = 배열번호
                    message && message.split('\n').map((line,index) => index > 0 ? 
                        <span key={`${no}-${index}`}>
                            <br/>
                            {line}
                        </span>
                        :
                        line )
                }
            </p>
            <strong/>
            
            <a onClick={ () => {notifyDeleteMessage(no)} }>삭제</a>
        </li>
    );
}

// 유효성 검사 
Message.propTypes = {
    no: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}