import React from 'react'
import { FoodWeight } from '../FoodWeight/FoodWeight';
import { MyButton } from '../MyButton/MyButton';
import './FoodCard.css';

export interface FoodCardProps {
  underCardText: string;
  description: string;
  brand: string;
  taste: string;
  weight: number;
  advantages: {bold?: string, text: string}[];
  isDisabled?: boolean;
  isSelected?: boolean;

  onFoodClick: ()=>void
}

export const FoodCard: React.FC<FoodCardProps> = ({
  underCardText, 
  brand,
  description,
  taste,
  weight,
  advantages, 
  onFoodClick, 
  isSelected,
  isDisabled
}) => {

  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const [canBeHovered, setCanBeHovered] = React.useState<boolean>(true);
  
  function changeIsHovered(condition: boolean) {
    setIsHovered(canBeHovered && condition);
  }

  function mouseLeave() {
    setCanBeHovered(true)
    changeIsHovered(false)
  }

  function blockHover() {
    setCanBeHovered(false);
  }

  function handleFoodClick() {
    if (isDisabled) {
      return;
    }
    blockHover();
    onFoodClick();
    setIsHovered(false);
  }

  return (
    <div className='cardWithDescription'>
      <div 
        className={['card', 'outside', isDisabled ? 'disabled' :isSelected ? 'selected' : 'default'].join(' ')} 
        onClick={handleFoodClick}
        onPointerEnter={()=>changeIsHovered(true)}
        onPointerLeave={mouseLeave}
      >
        <div className={`inside ${isDisabled && 'translucent'}`}>
          
            {isHovered && isSelected 
              ?  <h5 className='description hoveredAndSelected'>Котэ не одобряет?</h5>
              :  <h5 className='description'>{description} </h5>
            }
         
          
          <h1 className='brand'>{brand}</h1>
          <h2 className='taste'>{taste}</h2>
          <ul>
            {advantages.map(a => 
              <li key={a.text}>
                <b>{a.bold}</b>
                {a.text}
              </li>  
            )}
          </ul>
        </div>
        <FoodWeight>
            {weight}
        </FoodWeight>
      </div>
        <p className='underCardText'>
          {
          isDisabled ? <span className='yellowText'>Печалька, {taste} закончился.</span> :
           isSelected ? underCardText :
            <>
              Чего сидишь? Порадуй котэ,
              <MyButton onClick={onFoodClick}>
                купи
              </MyButton>  
              <span className='blueDot'>.</span>    
            </>
          }
        </p>
    </div>
  )
}
