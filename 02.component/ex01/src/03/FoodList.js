import React from "react";
import ListItem from "./ListItem";

export default function FoodList({foods}){   // 함수라서 this 못쓰고 함수인자로 받아야된다
     return(
         <ul>
            { foods.map((food) => <ListItem 
                                    key={food.no}
                                    name={food.name} 
                                    quantity={food.quantity} / >)}
         </ul>
     )
    
} 