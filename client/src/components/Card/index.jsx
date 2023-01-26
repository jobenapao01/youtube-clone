import React from 'react'
import { ChannelImage, ChannelName, Container, Details, Image, Info, Texts, Title } from './card.elements'
import {Link} from 'react-router-dom'

const Card = ({type}) => {
  return (
    <Link to='/video/test' style={{textDecoration:'none'}}>
      <Container type={type}>
        <Image 
          src='https://i.ytimg.com/vi/6viiFtvcUWw/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLCA7RDWjgtI0dLq3wtXzjxjNU54XQ'
          type={type}
         />

        <Details type={type}>
          <ChannelImage 
            src='https://yt3.ggpht.com/ytc/AL5GRJU6LbOa-bTMnpAw_kIa41IlZEb5LOhJN5Hbsj3Z2w=s68-c-k-c0x00ffffff-no-rj'
            type={type}
             />
          <Texts>
            <Title>test</Title>
            <ChannelName>pewdipie</ChannelName>
            <Info>6666666 . 1day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  )
}

export default Card