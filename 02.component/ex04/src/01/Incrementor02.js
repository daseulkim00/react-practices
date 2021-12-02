import React, {useState} from 'react';
/**
 * state :{
 * sdfdfsf: 10
 * }
 * 
 */
export default function ({ begin, step }) {
    const [stateVal, setVal] = useState(begin);    // 질문! useState return하면 값이 뭐냐? - 배열을 하나 리턴해주고 그리고 
    //값, 함수인데 함수를 호출해서 state안에있는 무언갈 바꾸어 셋팅해준다
    // 함수는 처음부터 다시 실행된다.
    // 쓸데없는코드 const [stateStep] = useState(step);   
    return (
        <div>
            <button onClick={(e) => {
                setVal(stateVal + step);
            }}>
                <strong>+</strong>
            </button>
            {' '}
            <span>{ stateVal }</span>
            {' '}

            {/* 과제 */}

            <button onClick={(e) =>{
                if(begin > stateVal - step) return;

                setVal(stateVal - step);
            }}>
                <strong>-</strong>
            </button>
        </div>
    );
}