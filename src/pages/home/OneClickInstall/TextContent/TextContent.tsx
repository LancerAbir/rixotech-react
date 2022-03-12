import React from 'react'
import { TiPointOfInterest } from 'react-icons/ti'
import { listItemsType } from '../../../../../interfaces'
import { BodyText, SectionTitle } from '../../../../styledComponents/components'
import OneClickList from './OneClickList/OneClickList'

const listItems : listItemsType[] = [
    {id: 1, title: "Sell fixed value gift cards", Icon: TiPointOfInterest},
    {id: 2, title: "Testing Change", Icon: TiPointOfInterest},
    {id: 3, title: "Sell fixed value gift cards", Icon: TiPointOfInterest},
    {id: 4, title: "Sell fixed value gift cards", Icon: TiPointOfInterest},
    {id: 5, title: "Sell fixed value gift cards", Icon: TiPointOfInterest},
]

function TextContent() {
  return (
    <div className="features__main__content">
        <SectionTitle textAlign="left">One click install onto any website</SectionTitle>
        <BodyText>
            Let your customers but gift cards/certificates for
            your services and products already on your website.
        </BodyText>
        <OneClickList listItems={listItems} />
        {/* .features__main__content__list */}
    </div>
)
}

export default TextContent