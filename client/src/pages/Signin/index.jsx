import React from 'react'
import { Button, Container, Input, Link, Links, More, SubTitle, Title, Wrapper } from './signin.elements'

const Signin = () => {
  return (
    <Container>
        <Wrapper>

            <Title>Sign In</Title>
            <SubTitle>Please your account details</SubTitle>
            <Input placeholder='Username' />
            <Input type='password' placeholder='Password' />
            <Button>Sign In</Button>

            <Title>or</Title>
            <Input placeholder='Username' />
            <Input placeholder='Email' />
            <Input type='password' placeholder='Password' />
            <Button>Sign up</Button>
        </Wrapper>
        <More>
          English (USA)

          <Links>
            <Link>Help</Link>
            <Link>Privacy</Link>
            <Link>Terms & Conditions</Link>
          </Links>
        </More>
    </Container>
  )
}

export default Signin