import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styled from "styled-components";

const ChartContainer = styled.div`
margin: 20px;
padding: 20px;
box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);

`

const ChartTitle = styled.h3`
margin-bottom: 1.5rem;
`

const Chart = ({title,grid,data,dataKey}) => {
  return (
    <ChartContainer>
        <ChartTitle>{title}</ChartTitle>
         <ResponsiveContainer width="100%" aspect={4 / 1} >
        <LineChart
          data={data}
        >
         <XAxis dataKey="name" stroke='#5550bd' />
          
         
          <YAxis />
     
         
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" strokeDasharray="3 4 5 2" />
          <Tooltip/>
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" /> }
        </LineChart>
      </ResponsiveContainer>



    </ChartContainer>
  
  )
}

export default Chart