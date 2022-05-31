import { GetStaticProps } from 'next'
import * as React from 'react'
import PasStyle from '../src/components/Layout/Style'
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
           <PasStyle tag='$HEADER$'>

           </PasStyle>
            <PasStyle 
                tag='$MAIN$'
            >
               <PasStyle grid columns='1fr 1fr'
                    tag='$SECTION$' 
                    pd='10px'
                    bg='#000'
                >
                    {datas.users.map(user => 
                        <PasStyle flex
                            tag='$NEXTLINK$'
                            href={user.avatar}
                            key={user.id} 
                            bg='gray' 
                            pd='10px'
                            mg='10px'
                        > 
                            <PasStyle 
                                tag='$NEXTIMG$'
                                src={user.avatar}
                                w='50px'
                                h='50px'
                                bRadius='50%'
                            />
                            <PasStyle 
                                tag='$H1$'
                            >
                                {user.name}
                            </PasStyle>
                        </PasStyle>
                    )}
               </PasStyle>
            </PasStyle>
           <PasStyle tag='$FOOTER$'>
               
           </PasStyle>
        </>
    )
}

export default Home