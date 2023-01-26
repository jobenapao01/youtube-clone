import React from 'react'
import { Avatar, Container, Date, Details, Text, Username } from './comment.elements'

const Comment = () => {
  return (
    <Container>
      <Avatar  src='https://yt3.ggpht.com/ytc/AL5GRJU6LbOa-bTMnpAw_kIa41IlZEb5LOhJN5Hbsj3Z2w=s68-c-k-c0x00ffffff-no-rj'/>
      
      <Details>
          <Username>
              George Khalifa   
              <Date>3 days ago</Date>
          </Username>
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste suscipit praesentium quidem esse laborum nesciunt asperiores, dolorum doloremque consectetur voluptas tempore commodi fugit error, qui repellat eveniet optio, vitae consequuntur adipisci labore aliquid! Facere excepturi consectetur vel culpa quas aliquam consequatur, ipsa maxime voluptatum doloremque ipsam ratione necessitatibus veritatis eveniet recusandae? Eos excepturi in consequuntur deleniti explicabo veniam nesciunt mollitia assumenda minima voluptatibus accusantium voluptates fugiat eligendi est ullam veritatis, minus fugit labore! Quod dolore doloribus pariatur ipsa in mollitia porro nesciunt voluptatum voluptatibus asperiores distinctio fugiat velit recusandae at consequatur numquam quaerat quam quisquam obcaecati, expedita nihil! Amet, ad?</Text>
      </Details>


    </Container>
  )
}

export default Comment