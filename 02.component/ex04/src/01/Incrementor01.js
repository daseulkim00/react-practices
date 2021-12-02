import React, { Component } from 'react';

export default class extends Component {
    constructor() {
        console.log('==============cons============');
        super(...arguments)      // 배열에 있는 값 다 건져주는거

        this.state = {
            num: this.props.begin
        }
    }
    //state 가 변경되면 render가 호출된다.
    

    onClickButton(e) {
        console.log('==============onclick============');
        this.setState({      // 이 안에있는 값이 변경되면 화면을 다시 그려줘야하는 데이터를 넣음
            num: this.state.num + this.props.step
        })
    }
    
    render() {
        console.log('==========================');
        return (
            <div>
                <button onClick={this.onClickButton.bind(this)}>
                    <strong>+</strong>
                </button>
                {' '}

                <span>{this.state.num}</span>

                {' '}
                <button onClick={(e) => {
                    let res = this.state.num - this.props.step
                    if (res < this.props.begin)
                        return;

                    this.setState({
                        num: res
                    })
                }
                }>
                    <strong>-</strong>
                </button>
                {' '}

              
            </div>
        );
    }
}