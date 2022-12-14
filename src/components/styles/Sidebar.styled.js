import styled,{css} from "styled-components";
import { Assessment, Drafts, Feedback, Forum, LineStyle, LocalAtm, PermIdentity, PieChart, Receipt, Storefront, Timeline, TrendingUp, Work } from '@mui/icons-material'


const SidebarContainer = styled.div`
flex: 1;
height: calc(100vh - 50px);
background-color:rgb(251, 251, 255);
position: sticky;
top: 50px;
`
export default SidebarContainer 


export const SidebarWrapper = styled.div`
    padding: 20px;
    color: #555;
   
`
export const SidebarMenu = styled.div`
    margin-bottom: 10px;
   
`

export const SidebarTitle = styled.h3`
    font-size: 13px;
    color: rgb(187, 186, 186);
`

export const SidebarList = styled.ul`
    list-style: none;
    padding: 5px;
`

export const SidebarListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
&:hover {
        background-color: rgb(240, 240, 255);
    }
`

/* Tüm iconlarla ilgili style verme */

export const sharedStyle = css`
margin-right:10px;
font-size:20px !important;
`

export const MyLineStyle = styled(LineStyle)`
    ${sharedStyle}
`
export const MyTimeline = styled(Timeline)`
    ${sharedStyle}
`
export const MyTrendingUp = styled(TrendingUp)`
    ${sharedStyle}
`
export const MyPermIdentity = styled(PermIdentity)`
    ${sharedStyle}
`
export const MyStorefront = styled(Storefront)`
    ${sharedStyle}
`
export const MyAssessment = styled(Assessment)`
    ${sharedStyle}
`
export const MyLocalAtm = styled(LocalAtm)`
    ${sharedStyle}
`
export const MyDrafts = styled(Drafts)`
    ${sharedStyle}
`
export const MyFeedback = styled(Feedback)`
    ${sharedStyle}
`
export const MyForum = styled(Forum)`
    ${sharedStyle}
`
export const MyWork = styled(Work)`
    ${sharedStyle}
`
export const MyPieChart = styled(PieChart)`
    ${sharedStyle}
`
export const MyReceipt = styled(Receipt)`
    ${sharedStyle}
`

