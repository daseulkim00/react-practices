import React, {Component} from "react";
import ListItem from "./ListItem";

export default class FoodList extends Component{
    
    render(){
         // const components = [];
        // this.props.foods.forEach(function(food){
        //    components.push(<ListItem name={food.name} quantity={food.quantity} />);
        // });

        // const foods = this.props.foods;
        // for(let i =0; i < foods.length; i++){
        //     components[i] = <ListItem name={food[i].name} quantity={food.[i].quantity} / >;
        //}

        // this.props.foods.forEach(function(food,index){
        //     components[index] = <ListItem name={food.name} quantity={food.quantity} / >;
        // });

         // const r = [1, 2, 3, 4].map(function(e){
        //    return e * e;
        // });

    
        return( // class 로 이렇게 받아줘야함 this.props.foods 이 foods는 App.js의  <FoodList foods={foods}></FoodList>의 foods와 같아야함
            <ul>                            {/* return 생략*/}
                { this.props.foods.map((food) => <ListItem name={food.name} quantity={food.quantity} / >)}
            </ul>
        )
    }
} 