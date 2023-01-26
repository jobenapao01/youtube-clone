import React from 'react'
import { Button, Buttons, Channel, ChannelCounter, ChannelDetail, ChannelInfo, ChannelName, Container, Content, Description, Details, Hr, Image, Info, Recommendation, Subscribe, Title, VideoWrapper } from './videopage.elements'
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import {Comments, Card} from '../../components/';

const Videopage = () => {
  return (
    <Container>
        <Content>
          <VideoWrapper>
              <iframe
               width="100%"
               height="720"
               src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
               title="YouTube video player"
               frameborder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowfullscreen>      
              </iframe>
          </VideoWrapper>
          <Title>Test video</Title>
          <Details>
            <Info>666,6666 views . 1 day ago</Info>
            <Buttons>
                <Button><ThumbUpOffAltOutlinedIcon/> 666</Button>
                <Button><ThumbDownOutlinedIcon/></Button>
                <Button><ReplyOutlinedIcon/>Share</Button>
                <Button><DownloadOutlinedIcon/>Download</Button>
            </Buttons>
          </Details>
          <Hr/>

          <Channel>
            <ChannelInfo>
              <Image src='https://yt3.ggpht.com/ytc/AL5GRJU6LbOa-bTMnpAw_kIa41IlZEb5LOhJN5Hbsj3Z2w=s68-c-k-c0x00ffffff-no-rj' />
              <ChannelDetail>
                  <ChannelName>Test Name</ChannelName>
                  <ChannelCounter>666 subscribers</ChannelCounter>
                  <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit est quasi assumenda sapiente! Animi, facere exercitationem. Nulla doloremque consequuntur ipsum, labore totam repellendus facere quidem veniam magni quis deserunt distinctio rerum vero explicabo. Modi quibusdam ducimus est sequi sint ipsa voluptates praesentium, iusto labore unde nemo in obcaecati, eveniet tempora nisi. Laborum distinctio repudiandae explicabo deserunt porro fugiat facilis expedita molestias, eos excepturi aliquam maiores sit repellendus sunt repellat voluptates, provident dolore officia incidunt. Vel nostrum repudiandae quidem placeat neque obcaecati cum. Neque perspiciatis praesentium illo quia facilis omnis odit cupiditate alias beatae officia. Quos, sequi, voluptates, illum facere iure reiciendis voluptatem odio excepturi distinctio minima cupiditate? Minima at nobis, vitae a ea alias fugiat dolores, iusto vel nisi nam. Nihil sapiente laudantium iste impedit corrupti esse dolor, cupiditate, exercitationem, minus ea eos! Ea sunt nemo repudiandae dolor odio fugiat. Inventore quos odio magnam hic, totam voluptatibus at laboriosam deleniti nemo porro asperiores vitae! Corporis delectus laudantium eos, ipsum quis quibusdam consectetur, esse accusantium quia commodi rerum eveniet doloremque sint! Adipisci, iusto. Harum numquam in aliquid, perspiciatis exercitationem necessitatibus? Ad accusamus natus est doloremque incidunt error aliquam voluptatibus consequuntur in excepturi enim consequatur placeat blanditiis, obcaecati culpa praesentium dicta, reprehenderit inventore. Debitis illo molestias, eius iste excepturi voluptatum laudantium autem dicta deserunt quidem sint sed doloribus repellendus illum harum pariatur aliquam esse provident? Sunt optio, cum, totam nihil maxime amet nostrum numquam eligendi laudantium vitae obcaecati vel earum, repellat magnam excepturi doloremque omnis quos quis similique laboriosam autem. Facilis minus omnis, deserunt veritatis accusamus deleniti soluta, suscipit saepe fugiat nulla consectetur maxime quasi rerum eius explicabo odio cupiditate in. Itaque architecto ab amet adipisci beatae voluptas velit fuga! Cum error, officiis pariatur nesciunt vero enim unde ipsa. Eum ullam dolor, mollitia ipsa debitis sapiente dolorum commodi numquam omnis, odit nostrum, consectetur at adipisci porro architecto iusto officia vero velit quidem deleniti reprehenderit et? Ullam laudantium sint ipsam provident illum! Vel laborum, modi alias, labore debitis aliquid quos perspiciatis fugiat neque iusto praesentium cum quibusdam magni consequatur in cupiditate saepe adipisci delectus at. Ea illum animi ipsam dicta quod autem porro quam sunt non, optio quidem aperiam quo officiis, explicabo molestias harum! Adipisci, officia. Aliquid quaerat animi, sunt corporis blanditiis odio totam laborum dicta modi iusto quibusdam soluta quos nisi optio aut, dolore ducimus consectetur expedita quas excepturi rem praesentium. Distinctio odit repellendus aut odio id dolorem eum placeat atque rem sed laudantium natus necessitatibus deserunt, perferendis quos recusandae quam quas consectetur est cumque? Quos minus repellendus cumque sint asperiores unde obcaecati, dolor numquam quisquam corrupti, a ducimus, iste vel ipsam provident sequi odit incidunt atque alias voluptatum assumenda? Voluptas, cupiditate. Voluptatibus assumenda non eos quas nisi architecto quam recusandae ipsum id necessitatibus, itaque doloremque sed quae officiis voluptatum voluptate laborum velit commodi amet inventore eveniet consequuntur cumque. Maiores corporis optio ut delectus mollitia, possimus tempora, id cum tempore beatae pariatur, quos numquam recusandae veritatis odio sed? Sunt maiores eum necessitatibus velit! Iusto minima nesciunt quo dolorem blanditiis cupiditate eligendi odit?</Description>
              </ChannelDetail>
            </ChannelInfo>
            <Subscribe>Subscribe</Subscribe>
          </Channel>
          <Hr />
          
          <Comments />
        </Content>
        <Recommendation>
          <Card type='sm'/>
          <Card type='sm'/>
          <Card type='sm'/>
          <Card type='sm'/>
          <Card type='sm'/>
          <Card type='sm'/>

        </Recommendation>
    </Container>
  )
}

export default Videopage