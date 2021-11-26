import React from 'react';
import FoodList  from './FoodList';

export default function(){
  const foods = [{
    no: 1,
    name: "Bread",
    quantity: 10
  }, {
    no: 1,
    name: "Milk",
    quantity: 20
  }, {
    no: 1,
    name: "Egg",
    quantity: 30
  }]
  return(
    <div id='App'>
      <FoodList foods={foods}></FoodList>
    </div>
  )
}