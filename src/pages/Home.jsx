import React from 'react'
import Featured from '../components/Featured'
import styled from "styled-components";
const HomeContainer = styled.div`
flex:4
`

const Home = () => {
  return (
    <HomeContainer>
        <Featured/>
    </HomeContainer>
  )
}

export default Home