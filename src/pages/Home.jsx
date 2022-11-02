import React from 'react'
import Featured from '../components/Featured'
import styled from "styled-components";
import Chart from '../components/Chart';
import {userData} from "../helper/dummyData"
import NewMembers from '../components/NewMembers';
import LastTransction from '../components/LastTransction';


const HomeContainer = styled.div`
flex:4
`
const HomeBottomContainer =styled.div`
display: flex;
margin: 20px;
`

const Home = () => {
  return (
    <HomeContainer>
        <Featured/>

        <Chart data={userData} title="User Analytics"  grid dataKey ="Active User"/>
       
        <HomeBottomContainer>
        <NewMembers/>
        <LastTransction/>
        </HomeBottomContainer>
        
    </HomeContainer>
  )
}

export default Home