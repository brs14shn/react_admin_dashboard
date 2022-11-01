import { Assessment, Drafts, Feedback, Forum, LineStyle, LocalAtm, PermIdentity, PieChart, Receipt, Storefront, Timeline, TrendingUp, Work } from '@mui/icons-material'
import React from 'react'
import SidebarContainer, { SidebarMenu, SidebarTitle, SidebarWrapper,SidebarList, SidebarListItem, MyLineStyle, MyTimeline, MyTrendingUp, MyPermIdentity, MyStorefront, MyAssessment, MyLocalAtm, MyDrafts, MyFeedback, MyForum, MyWork, MyPieChart, MyReceipt } from './styles/Sidebar.styled'


const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarWrapper>
       <SidebarMenu>
        <SidebarTitle>Dasboard</SidebarTitle>
        <SidebarList>
          <SidebarListItem>
            <MyLineStyle/>
            Home
          </SidebarListItem>
          <SidebarListItem>
            <MyTimeline/>
            Analytics
          </SidebarListItem>
          <SidebarListItem>
            <MyTrendingUp/>
            Sales

          </SidebarListItem>
        </SidebarList>
       </SidebarMenu>
       <SidebarMenu>
        <SidebarTitle>All Menu</SidebarTitle>
        <SidebarList>
          <SidebarListItem>
            <MyPermIdentity/>
            Users
          </SidebarListItem>
          <SidebarListItem>
            <MyStorefront/>
            Products
          </SidebarListItem>
          <SidebarListItem>
           <MyAssessment/>
           Reports

          </SidebarListItem>
          <SidebarListItem>
            <MyLocalAtm/>
            Transactions
          </SidebarListItem>
        </SidebarList>
       </SidebarMenu>
       <SidebarMenu>
        <SidebarTitle>Connect</SidebarTitle>
        <SidebarList>
          <SidebarListItem>
            <MyDrafts/>
            Mail
          </SidebarListItem>
          <SidebarListItem>
            <MyFeedback/>
            Feedback
          </SidebarListItem>
          <SidebarListItem>
            <MyForum/>
            Message
          </SidebarListItem>
        </SidebarList>
       </SidebarMenu>
       <SidebarMenu>
        <SidebarTitle>Employess</SidebarTitle>
        <SidebarList>
          <SidebarListItem>
            <MyWork/>
            Manage
          </SidebarListItem>
          <SidebarListItem>
            <MyPieChart/>
            Analytics
          </SidebarListItem>
          <SidebarListItem>
            <MyReceipt/>
            Report
          </SidebarListItem>
        </SidebarList>
       </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar