import React from 'react'
import Featured from '../components/Featured'
import styled from "styled-components";
import Chart from '../components/Chart';
import {userData} from "../helper/dummyData"


const HomeContainer = styled.div`
flex:4
`

const Home = () => {
  return (
    <HomeContainer>
        <Featured/>
        <Chart data={userData} title="User Analytics"  grid dataKey ="Active User"/>
    </HomeContainer>
  )
}

export default Home