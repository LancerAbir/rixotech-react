import React from 'react'
import { IconType } from 'react-icons';
import { BodyText, IconListItem } from '../../../../../styledComponents/components';


interface Props{
    Icon: IconType
    title: string
}

function OneClickListItem({Icon, title}: Props) {
  return (
    <IconListItem>
        <Icon />
        <BodyText>
            {title}
        </BodyText>
    </IconListItem>
  )
}

export default OneClickListItem