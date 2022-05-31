import { NextApiRequest, NextApiResponse } from "next"

export const dataUsers = [
    {
        id:'1',
        name:'teste1',
        email:'teste1@hotmail.com',
        avatar:'https://i.pinimg.com/736x/85/f5/8c/85f58cc999bf7c2aace741f592df9c58.jpg',
        status:'inactive'
    },
    {
        id:'2',
        name:'teste2',
        email:'teste2@hotmail.com',
        avatar:'https://33.media.tumblr.com/964388f84a8052c301d6309ecea8db05/tumblr_nel87gkcTr1r2gyilo1_500.gif',
        status:'active'
    },
    {
        id:'3',
        name:'teste3',
        email:'teste3@hotmail.com',
        avatar:'https://i.pinimg.com/236x/ec/d2/2a/ecd22ad93617a905117156091ebc7bb8.jpg',
        status:'active'
    },
    {
        id:'4',
        name:'teste4',
        email:'teste4@hotmail.com',
        avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwI0cCsHrPG1OeVhTfyjkBln1dbjpcO5oveG-bB4TBBLC_Iq7QOMGEaZ3IXQtb3egVpg&usqp=CAU',
        status:'inactive'
    },
    {
        id:'5',
        name:'teste5',
        email:'teste5@hotmail.com',
        avatar:'https://i1.sndcdn.com/avatars-hNxI1fLALMFOBFzd-NXIV5Q-t500x500.jpg',
        status:'active'
    }
]

export const dataAnimes = [
    {
        id:'1',
        name:'anime1',
        thumb:'/img/anime.webp'
    },
    {
        id:'2',
        name:'anime2',
        thumb:'/img/anime.webp'
    },
    {
        id:'3',
        name:'anime3',
        thumb:'/img/anime.webp'
    },
    {
        id:'4',
        name:'anime4',
        thumb:'/img/anime.webp'
    },
    {
        id:'5',
        name:'anime5',
        thumb:'/img/anime.webp'
    }
]


const datas = (req : NextApiRequest, res : NextApiResponse) => {


    return res.status(200).json({
        animes:dataAnimes,
        users:dataUsers
    })
}

export default datas