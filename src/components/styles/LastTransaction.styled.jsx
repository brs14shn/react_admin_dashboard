import styled from "styled-components";


export const LastTransctionContainer =styled.div`
    flex: 2;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
`
export const LastTransctionTitle =styled.h3`
   font-size: 22px;
   font-weight: 600;
`
export const LastTransctionTable =styled.table`
   width: 100%;
    border-spacing: 20px;
`
export const LastTransctionTh = styled.th`
    text-align: left;
`
export const LastTransctionTdUser = styled.td`
    display: flex;
    align-items: center;
    font-weight: 600;
`
export const LastTransctionTdUserImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`
export const LastTransctionTd = styled.td`
    font-weight: 300;
`

export const LastTransctionButton = styled.button`
    padding: 5px 7px;
    border: none;
    border-radius: 10px;
    background-color:${({bgColor})=>bgColor || "#ebf1fe"};
    color:${({fdColor})=>fdColor || "#2a7ade"};
`