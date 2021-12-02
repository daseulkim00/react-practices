import React, {Component, useRef} from 'react';
import './assets/scss/App.scss';

export default class App extends Component {
    // 함수형 컴포넌트에서는 this.current.outter.scrolltop 이라고 쓰지만
    // 클레스형 컴포넌트에서는 current는 빼준다.

    onScroll(e){
        console.log(this.outterRef.scrollTop, ':', this.outterRef.clientHeight, ":" , this.innerRef.clientHeight)
    }

    render(){
        return (
            <div
                // ref에 함수대입해서 ref 대신쓴다.
                ref={ ref => this.outterRef = ref }
                className={'App'}
                onScroll= {this.onScroll.bind(this) }>
                <div
                    ref={ ref => this.innerRef = ref }>
                    <ul>
                        {Array.from({length: 100}, (_, i) => i + 1).map(i =>
                            <li>
                                {`아이템 ${i} 입니다.`}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}