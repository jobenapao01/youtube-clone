import React from 'react'
import Comment from './Comment'
import { Avatar, Container, Input, NewComment } from './comments.elements'

const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src='https://yt3.ggpht.com/ytc/AL5GRJU6LbOa-bTMnpAw_kIa41IlZEb5LOhJN5Hbsj3Z2w=s68-c-k-c0x00ffffff-no-rj' />
            <Input placeholder='Add a comment'/>
        </NewComment>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </Container>
  )
}

export default Comments