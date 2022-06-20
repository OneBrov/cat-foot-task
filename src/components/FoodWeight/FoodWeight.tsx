import React from 'react'
import './FoodWeight.css'

export interface FoodWeightProps {
    children: number
}

export const FoodWeight: React.FC<FoodWeightProps> = ({
    children,
}) => {
  return (
    <div className='foodWeightContainer'>
        <span className='weightNumber'>{String(children).replace('.', ',')}</span>
        <span className='weightUnit'>кг</span>
    </div>
  )
}
