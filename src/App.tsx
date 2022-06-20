import React from 'react';
import './App.css';
import { FoodCard } from './components/FoodCard/FoodCard';

const mockItems = [
  {  
    id: 1,
    description:'Сказочное заморское яство',
    brand:'Нямушка',
    taste:'с фуа-гра',
    advantages:[
      {bold: '10',  text: ' порций'},   { text: ' мышь в подарок'},
    ],
    underCardText:'Печень утки разварная с артишоками.',
    weight:0.5,
  }, 
  { 
    id: 2,
    description:'Сказочное заморское яство',
    brand:'Нямушка',
    taste:'с рыбой',
    advantages:[
      {bold: '40',  text: ' порций'},   {bold: '2',  text: ' мыши в подарок'},
    ],
    underCardText:'Головы щучьи с чесноком да свежайшая сёмгушка.',
    weight:2,
  }, 
  { 
    id: 3,
    description:'Сказочное заморское яство',
    brand:'Нямушка',
    taste:'с курой',
    advantages:[
      {bold: '100',  text: ' порций'},   
      {bold: '5',  text: ' мышей в подарок'},
      {text: 'заказчик доволен'},
    ],
    underCardText: 'Филе из цыплят с трюфелями в бульоне.',
    weight: 5,
    isDisabled: true,
  }, 
]

function App() {

  const [selectedIds, setSelectedIds] = React.useState<number[]>([]);

  function toggleItem(id: number) {
    if (selectedIds.includes(id)) {
      const filtered = selectedIds.filter(itemId => itemId!==id);
      setSelectedIds(filtered);
    } else {
      const newArr = [...selectedIds, id];
      setSelectedIds(newArr);
    }
    console.log(selectedIds)
  }

  return (
    <div className="App">
      <header className="header">
        Ты сегодня покормил кота?
      </header>
      <main className='container'>
        {mockItems.map((food, index) => 
          <FoodCard
            key={index}
            onFoodClick={()=>toggleItem(food.id)} 
            description={food.description}
            brand={food.brand}
            taste={food.taste}
            advantages={food.advantages}
            underCardText={food.underCardText}
            weight={food.weight}
            isSelected={selectedIds.includes(food.id)}
            isDisabled={food.isDisabled}
          />
        )}
        
      </main>
    </div>
  );
}

export default App;
