import { GetStaticProps } from 'next'
import * as React from 'react'
import Container from '../src/components/Layout/Container'
import { dataAnimes, dataUsers } from './api'

export const getStaticProps : GetStaticProps = async (ctx) => {
    
    try {
        //const resp = await axiosConfig(`users/${params.id}/`)
        const respAnimes = dataAnimes
        const respUsers = dataUsers
        return {
            props: {
              datas:{
                  animes:dataAnimes,
                  users:dataUsers
              },
            },
          }

    } catch (e) {
        console.log(e)
        return {
            props: {
              datas:{
                  animes:[{}],
                  users:[{}]
              },
            },
            notFound:true
          }
    }
}

type Animes = {
    id:string
    name:string
    thumb:string
}

type Users = {
    id:string
    name:string
    email:string
    avatar:string
    status:string
}

type Props = {
    datas:{
        animes:Array<Animes>
        users:Array<Users>
    }
}

const Home = ({
    datas
} : Props) => {

    return(
        <>
           <Container tag='header'>

           </Container>
            <Container 
                tag='main'
            >
               <Container 
                    tag='section' 
                    columns='1fr 1fr'
                >
                    {datas.users.map(user => 
                    <Container flex key={user.id}> 
                        <img src={user.avatar} width='50px' height='50px'/>
                        <h1>
                            {user.name}
                        </h1>
                    </Container>)}
               </Container>
            </Container>
           <Container tag='footer'>
               
           </Container>
        </>
    )
}

export default Home