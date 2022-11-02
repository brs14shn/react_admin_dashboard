import styled from "styled-components";


export const NewMembersContainer = styled.div`
/* flex:1; */
width: 25rem;
padding:20px;
margin-left:20px;
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

`


export const NewMembersTitle = styled.span`
    font-size: 22px;
    font-weight: 600;
`
export const NewMembersImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`
export const NewMembersList = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
   .NewMembersListItem{
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0px;
   
   }
`

export const NewMembersUsers = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
    .username{
        font-weight: 600;
    }
    .title{
        font-weight: 300;
    }
`
    
export const NewMembersButton = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: #eeeef7;
    color: #555;
    cursor: pointer;
    .icon{
        font-size: 16px !important;
        margin-right: 5px;
    }
`
    
