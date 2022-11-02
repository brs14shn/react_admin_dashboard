import React from 'react'
import {FeaturedContainer,FeaturedWrapper,FeaturedTitle,FeaturedMoneyContainer,FeaturedSub} from './styles/Featured.styled'
import {featuredData} from "../helper/dummyData"
import { ArrowUpward } from '@mui/icons-material'

const Featured = () => {
  return (
    <FeaturedContainer>
       {featuredData &&  featuredData.map((item,index)=>(
        <FeaturedWrapper key={index}>
        <FeaturedTitle>{item.title}</FeaturedTitle>
        <FeaturedMoneyContainer>
            <span className='featuredMoney'>{item.money}</span>
            <span className='featuredMoneyRate' >{item.moneyRate}</span>
            <ArrowUpward  color="green" className='featuredIcon' />
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to Previous month</FeaturedSub>
    </FeaturedWrapper>
       ))}
       
        

    </FeaturedContainer>
  )
}

export default Featured