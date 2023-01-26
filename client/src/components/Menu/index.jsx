import React from 'react'
import { Button, Container, HR, Img, Item, Login, Logo, Title, Wrapper } from './menu.elements'
import MyTube from '../../images/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';


const Menu = ({setdarkMode,darkMode}) => {
  return (
    <Container>
      <Wrapper>
        <Link to='/' style={{textDecoration:'none', color: 'inherit'}}>
          <Logo>
            <Img src={MyTube} alt='MyTube logo'/>
            MyTube
          </Logo>
        </Link>

        <Item><HomeIcon/>Home</Item>
        <Item><ExploreOutlinedIcon/>Explore</Item>
        <Item><SubscriptionsOutlinedIcon/>Subscriptions</Item>
        <HR/>

        <Item><VideoLibraryOutlinedIcon/>Library</Item>
        <Item><HistoryOutlinedIcon/>History</Item>
        <HR/>

        <Login>
          Sign in to like, comment, and subscribe.

          <Link to='/signin' style={{textDecoration: 'none'}}>
            <Button><AccountCircleOutlinedIcon/>Sign In</Button>
          </Link>

        </Login>
        <HR/>

        <Title>Best of MyTube</Title>

        <Item><LibraryMusicOutlinedIcon/>Music</Item>
        <Item><SportsBasketballOutlinedIcon/>Sports</Item>
        <Item><SportsEsportsOutlinedIcon/>Gaming</Item>
        <Item><MovieCreationOutlinedIcon/>Movies</Item>
        <Item><NewspaperOutlinedIcon/>News</Item>
        <Item><LiveTvOutlinedIcon/>Live</Item>
        
        <HR/>
        <Item><SettingsOutlinedIcon/>Settings</Item>
        <Item><FlagOutlinedIcon/>Report</Item>
        <Item><HelpOutlineOutlinedIcon/>Help</Item>
        <Item onClick={() => setdarkMode(!darkMode)}><SettingsBrightnessOutlinedIcon/>{darkMode ? 'Light' : 'Dark'} Mode</Item>
      </Wrapper>
    </Container>
  )
}

export default Menu