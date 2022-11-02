import React from "react";
import { lastTransctionRows } from "../helper/dummyData";

import {
    LastTransctionContainer,
    LastTransctionTitle,
    LastTransctionTable,
    LastTransctionTh,
    LastTransctionTdUser,
    LastTransctionTdUserImg,
    LastTransctionTd,
    LastTransctionButton} from "../components/styles/LastTransaction.styled"

const LastTransction = () => {
  return (
    <LastTransctionContainer>
      <LastTransctionTitle>Latest transactions</LastTransctionTitle>
      <LastTransctionTable>
        <tr>
          <LastTransctionTh>Customer</LastTransctionTh>
          <LastTransctionTh>Date</LastTransctionTh>
          <LastTransctionTh>Amount</LastTransctionTh>
          <LastTransctionTh>Status</LastTransctionTh>
        </tr>

        {lastTransctionRows &&
          lastTransctionRows.map((item) => (
            <tr>
              <LastTransctionTdUser>
                <LastTransctionTdUserImg src={item.avatar} alt={item.username} />
                <span>{item.username}</span>
              </LastTransctionTdUser>
              <LastTransctionTd>{item.date}</LastTransctionTd>
              <LastTransctionTd>{item.transaction}</LastTransctionTd>
              <td>
                <LastTransctionButton bgColor={item.bgColor} fdColor ={item.fdColor} >{item.type}</LastTransctionButton>
              </td>
            </tr>
          ))}
      </LastTransctionTable>
    </LastTransctionContainer>
  );
};

export default LastTransction;
