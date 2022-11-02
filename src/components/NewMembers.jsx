import React from "react";

import { newMemberRows } from "../helper/dummyData";
import { NewMembersContainer } from "./styles/NewMember.styled";

const NewMembers = () => {
  return (
    <NewMembersContainer>
      <span>New Members</span>
      <ul>
        {newMemberRows &&
          newMemberRows.map((member) => (
            <li>
              <img src={newMemberRows[0].avatar} alt="" />
              <div>
                <span>{newMemberRows[0].username}</span>
                <span>{newMemberRows[0].occupation}</span>
              </div>
              <button></button>
            </li>
          ))}
      </ul>
    </NewMembersContainer>
  );
};

export default NewMembers;
