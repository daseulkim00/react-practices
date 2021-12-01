import React, {Component} from 'react';

// 클랙스형  리액트 중에 젤 중요한 거
export default class TitelBar01 extends Component {
    constructor(){
        super(...arguments);
        
        this.no =0
        this.state ={
            no:0
        }
    }

    onClickHandler(){
        // no VS state.no

        //this.no++;   // 컴포넌트의 this가 아니다. 값만올리고 다시 렌더링이 안된다.
        this.setState({
            no: this.state.no + 1 
        })
        console.log('titlebar01 clicked');
    }

    render() {
        return (
            <h1 
                onClick={ this.onClickHandler.bind(this) } // dom이 호출하는거라서 바꿔주고싶으면 미리 정적으로해준다bind를 써서
                style={{cursor: 'pointer'}}>
                ex02 - Functional Event Handler (Class Component)
                {
                    // no VS state.no
                    // ${this.no}
                    this.state.no
                }
            </h1>
        )
    }
}