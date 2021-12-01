import React, {useState} from 'react';

export default function ({ begin, step }) {
    const [stateVal, setVal] = useState(begin);    // 질문! useState return하면 값이 뭐냐? - 배열을 하나 리턴해주고 그리고 
    
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
            
            <button>
                <strong>-</strong>
            </button>
        </div>
    );
}