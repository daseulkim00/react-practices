import React, {Fragment, useState} from 'react';
import LifeCycle from './LifeCycle';

export default function App() {
    const [color, setColor] = useState('#000');
    return (
        <Fragment>
            <h2>ex05 - Component LifeCycle</h2>
            <button                                      // 색상 랜덤으로주는것 `#${Math.floor((Math.random() * 0x00ffffff)).toString(16)
                onClick={() => setColor(`#${Math.floor((Math.random() * 0x00ffffff)).toString(16)}`)}>
                색상변경
            </button>
            <br/>
            <LifeCycle color={color}/>
        </Fragment>
    );
}