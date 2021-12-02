import React, {Component} from "react";
import ListItem from "./ListItem";

export default class FoodList extends Component{
    
    render(){
        return(// 데이터는 여기서 주고
            <ul>
                <ListItem name="Egg" quantity="10"></ListItem>
                <ListItem name="Bread" quantity="20"></ListItem>
                <ListItem name="Milk" quantity="30"></ListItem>
                <ListItem name="당근" quantity="40"></ListItem>

            </ul>
        )
    }
} 