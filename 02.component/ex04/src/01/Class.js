import React, {Component} from "react";

export default class extends Component{
    constructor(){
        super(...arguments)

        this.state ={
            num : this.props.begin
        }
    }

    onClickButton(e){
        this.setState({
            num : this.state.num + this.props.step
        })
    }
    

    render(){
        return(
            <div>
                 <button onClick ={this.onClickButton.bind(this)}>
                    <strong>+</strong>
                </button>
                {' '}

                <span>{this.state.num}</span>
                {' '}
                <button onClick ={(e) =>{
                    let res = this.state.num - this.props.step
                    if(res < this.props.begin)
                    return;

                    this.setState({
                        num : res
                    })
                }}>
                    <strong>-</strong>
                </button>
            </div>
        );
    }
    

}
