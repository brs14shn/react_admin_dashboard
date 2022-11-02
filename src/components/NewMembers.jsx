import { Visibility } from "@mui/icons-material";
import React from "react";

import { newMemberRows } from "../helper/dummyData";
import { NewMembersContainer,NewMembersTitle,NewMembersImg,NewMembersList,NewMembersUsers,NewMembersButton } from "./styles/NewMember.styled";

const NewMembers = () => {
  return (
    <NewMembersContainer>
      <NewMembersTitle>New Members</NewMembersTitle>
      <NewMembersList>
        {newMemberRows &&
          newMemberRows.map((member) => (
            <li className="NewMembersListItem">
              <NewMembersImg src={member.avatar} alt="" />
              <NewMembersUsers>
                <span className="username">{member.username}</span>
                <span className="title" >{member.occupation}</span>
              </NewMembersUsers>
             
              <NewMembersButton>
              <Visibility className="icon"/>
                Display</NewMembersButton>
            </li>
          ))}
      </NewMembersList>
    </NewMembersContainer>
  );
};

export default NewMembers;
