import React from 'react'
import {Link} from 'react-router-dom';
import { Button, Container, Input, Search, Wrapper } from './navbar.elements';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search'/>
          <SearchOutlinedIcon/>
        </Search>

        <Link to='/signin' style={{textDecoration: 'none'}}>
          <Button>
            <AccountCircleOutlinedIcon/>
            Sign In
          </Button>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Navbar