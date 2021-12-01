import React, { Component } from 'react';

export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            // step: this.props.step, 변화되지 않는 값이라 지워버림
            val: this.props.begin
        }
    }

    onClickButton(e){
        // 이렇게 쓰면 안된다. this.state.value = this.state.value + this.props.step; setstate함수를 사용해라
        this.setState({
            val: this.state.val + this.props.step
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickButton.bind(this)}>  {/*  // this 안해주면 전역변수로 되서 this를 써줘야함 */}
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.val}</span>
                {' '}

                {/* 과제 - 되면 숫자 내려가게 */}
                
                <button >  
                    <strong>-</strong>
                </button>
            </div>
        );
    }
}