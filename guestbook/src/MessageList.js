import React, {Fragment, useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Message from './Message';
import styles from './assets/scss/MessageList.scss';
import modalStyles from "./assets/scss/modal.scss";

Modal.setAppElement('body');

export default function MessageList({messages, notifyMessage}) {
    const refForm = useRef(null);
    const [modalData, setModalData] = useState({isOpen: false});

    useEffect(() =>{
        setTimeout(() =>{
            refForm.current && refForm.current.password.focus();
        },200);
    }, [modalData]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // password - name으로 접근
            if(e.target.password.value === '') {
                return;
            }
                 // 통신
            // const response = await fetch(`/api/${modalData.messageNo}`, {
            //     method: 'delete',
            //     header: {
            //         'Content-Type': 'application/json',
            //         'Accept': 'application/json'
            //     },
            //     body: JSON.stringify({password: modalData.password})
            // });

            // if(!response.ok) {
            //     throw  `${response.status} ${response.statusText}`;
            // }

            // const jsonResult = response.json;


            // 비밀번호가 틀린 경우
            // jsonResult.data가  null
            
            setModalData(Object.assign({}, modalData, {label:'비밀번호가 일치하지 않습니다.', password: ''}));

            // 잘 삭제가 된 경우
            // jsonResult.data가 10
            setModalData({isOpen: false, password:''});
            notifyMessage.delete(modalData.messageNo);
        } catch (err) {
            console.error(err);
        }
    }

    const notifyDeleteMessage = (no) => {
        // 그냥 modal.label(''작성시 입력했던 비밀번호를 입력 하세요.') 값이 변한걸 인지 못해서  같은거라고 생각해줘서 안읽어드림
        // 이거 자체('setModalData({})')가 새로운 객체를 만들어주는것이기때문에 새로운거라고 인색해서 읽어드림
        setModalData({
        // console.log('delete!' + no);
        // setIsOpen(true);   // 삭제버튼 클릭하면 비밀번호 창 뜨게나옴
        // setPassword('');
        // setIsOpen('')
            label: '작성시 입력했던 비밀번호를 입력 하세요.', 
            isOpen: true,
            messageNo: no,
            password: ''
        })
    }

    return (
        <Fragment>
            {/* 그려주는거 */}
            <ul className={styles.MessageList}>
                {messages.map(message => <Message key={`guestbook_message_${message.no}`}
                                                  no={message.no}
                                                  name={message.name}
                                                  message={message.message} 
                                                  notifyDeleteMessage={notifyDeleteMessage} />)}
            </ul>
            <Modal
                isOpen={modalData.isOpen}

                onRequestClose={ () => setModalData({isOpen: false}) }  //  shouldCloseOnOverlayClick가 true가 되면 onRequestClose 이벤트 발생이 일어남
                shouldCloseOnOverlayClick={true} // 밖에 눌렀을때 꺼지는거 
                
                className={modalStyles.Modal}
                overlayClassName={modalStyles.Overlay}
                style={{content: {width: 350}}}>
                <h1>비밀번호입력</h1>
                <div>
                    <form
                        ref={refForm}
                        className={styles.DeleteForm}
                        onSubmit={handleSubmit}>
                        <label>{modalData.label || ''}</label>
                        <input
                            type={'password'}
                            autoComplete={'off'}
                            name={'password'}
                            value={modalData.password}
                            placeholder={'비밀번호'}
                            onChange={(e) => setModalData(Object.assign({}, modalData, {password: e.target.value}))}/>
                    </form>
                </div>

                <div className={modalStyles['modal-dialog-buttons']}>
                    <button onClick={ () => {
                        // form 에 접근하기 위하여 refForm.current 사용 form 태그의 이벤트 submit으로 강제 발생시키기(onsubmit으로)
                        // bubbles: true 사용이유: 리액트는 제일 최상단 부모에서 이벤트를 모아서 전달해주기 때문에 버블링으로 이벤트를 최상단으로 올려준다.
                        refForm.current.dispatchEvent(new Event("submit", {cancelable: true, bubbles: true}));
                    } }>확인</button>
                                                {/* Object.assign()  원래있던건 그대로고 뒤에서 써주는게 덮어 써진다. {}빈객체(-새로운 집을 만들려고)에 modalData(원래있던값 다 넣어주고 {isOpen: false} 도 넣어준다. )*/}
                    <button onClick={() => {setModalData(Object.assign({}, modalData, {isOpen: false})) } }>취소</button>
                </div>

            </Modal>
        </Fragment>
    );
}

MessageList.propType = {
    message: PropTypes.arrayOf(PropTypes.shape(Message.propType))
}