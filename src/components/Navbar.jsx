import { Language, NotificationsNone, Settings } from '@mui/icons-material'
import React from 'react'
import NavbarContainer, { NavbarWrapper, TopLeft, TopRight,Logo, IconContainer, IconBadge, Avatar } from './styles/Navbar.styled'

const Navbar = () => {
 const randomNumber = () =>Math.floor(Math.random() * 99 )+1

 console.log(randomNumber)
  return (
    <NavbarContainer>
        <NavbarWrapper>
            <TopLeft>
                <Logo>
                    Admin
                </Logo>

            </TopLeft>
            <TopRight>
               <IconContainer>
                <NotificationsNone/>
                <IconBadge>5</IconBadge>
               </IconContainer>
               <IconContainer>
                <Language/>
                <IconBadge>3</IconBadge>

               </IconContainer>
               <IconContainer>
                <Settings/>

               </IconContainer>
               <Avatar src ={`https://randomuser.me/portraits/men/${randomNumber()}.jpg`} />
            </TopRight>
          
        </NavbarWrapper>
    </NavbarContainer>
  )
}

export default Navbar