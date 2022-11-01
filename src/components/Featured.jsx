import React from 'react'
import {FeaturedContainer,FeaturedWrapper,FeaturedTitle,FeaturedMoneyContainer} from './styles/Featured.styled'
import {featuredData} from "../helper/dummyData"
import { ArrowUpward } from '@mui/icons-material'

const Featured = () => {
  return (
    <FeaturedContainer>
       {featuredData &&  featuredData.map((item,index)=>(
        <FeaturedWrapper key={index}>
        <FeaturedTitle>{item.title}</FeaturedTitle>
        <FeaturedMoneyContainer>
            <span>{item.money}</span>
            <span>{item.moneyRate}</span><ArrowUpward/>
        </FeaturedMoneyContainer>
        <span>Compared to Previous month</span>
    </FeaturedWrapper>
       ))}
       
        

    </FeaturedContainer>
  )
}

export default Featured