import React from 'react'
import './MyButton.css'


export interface MyButtonProps {
    children: React.ReactNode;
    onClick: ()=>void;
}

export const MyButton: React.FC<MyButtonProps> = ({
    children, onClick
}) => {
  return (
    <button className='myButton' onClick={onClick}>{children}</button>
  )
}
