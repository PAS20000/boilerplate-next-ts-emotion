import { GetStaticProps } from 'next'
import * as React from 'react'
import Style from '../src/components/Layout/Style'
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
           <Style tag='header'>

           </Style>
            <Style 
                tag='main'
                bg='#000'
            >
               <Style 
                    tag='section' 
                    pd='10px'
                >
                    {datas.users.map(user => 
                    <Style flex 
                        key={user.id} 
                        bg='#fff' 
                        pd='10px'
                    > 
                        <img src={user.avatar} width='50px' height='50px'/>
                        <h1>
                            {user.name}
                        </h1>
                    </Style>)}
               </Style>
            </Style>
           <Style tag='footer'>
               
           </Style>
        </>
    )
}

export default Home