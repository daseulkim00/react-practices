import React, {Component} from "react";

export default class ListItem extends Component{
    render(){
        return( // 형식은 여기서 정해주고
                // class 에서는  아래처럼 받아져서 이렇게<ListItem name="Egg" quantity="10"> 적어줘야한다.
                <li>{this.props.name} : {this.props.quantity}</li>
        )
    }
} 