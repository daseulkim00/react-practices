import React from 'react';
import CardList from './CardList'
import cards from './assets/json/data.json';
import './assets/css/styles.css';


export default function(){
    return(
      <div className='Kanbanboard'>
                    {/* filter도 배열에 반복을 돌지만 element를 돌면서 가져올때 리턴값이 트루가되면(status === 'ToDo) 결과값이 가져오고  */}
          <CardList key='ToDo' title={'ToDo'} cards ={ cards.filter((card) => card.status === 'ToDo')}/>
          <CardList key='Doing' title={'Doing'} cards ={ cards.filter((card) => card.status === 'Doing')}/>
          <CardList key='Done' title={'Done'} cards ={ cards.filter((card) => card.status === 'Done')}/>
        
      </div>
    )
}
