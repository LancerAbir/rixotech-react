import React from 'react'
import OneClickListItem from './OneClickListItem'
import { FaRegHandPointRight } from 'react-icons/fa';
import { listItemsType } from '../../../../../../interfaces';


interface Props{
    listItems: listItemsType[]
}
function OneClickList({listItems}: Props) {
  return (
    <ul className="features__main__content__list">
        {listItems && listItems.map(item => <OneClickListItem key={item.id} title={item.title} Icon={item.Icon} />)}                 
    </ul>
  )
}

export default OneClickList