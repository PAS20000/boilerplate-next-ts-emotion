import { NextApiRequest, NextApiResponse } from "next"

export const dataUsers = [
    {
        id:'1',
        name:'teste1',
        email:'teste1@hotmail.com',
        avatar:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2FDvyzMemes%2Ffotos-animes%2F&psig=AOvVaw3JpQNy3whYk7pd9h2wj8c0&ust=1653996648511000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLi6wuePh_gCFQAAAAAdAAAAABAT',
        status:'inactive'
    },
    {
        id:'2',
        name:'teste2',
        email:'teste2@hotmail.com',
        avatar:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.facebook.com%2F1494166654177801%2Fphotos%2Fa.1494167790844354%2F1635512990043166%2F%3Ftype%3D3&psig=AOvVaw3JpQNy3whYk7pd9h2wj8c0&ust=1653996648511000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLi6wuePh_gCFQAAAAAdAAAAABAi',
        status:'active'
    },
    {
        id:'3',
        name:'teste3',
        email:'teste3@hotmail.com',
        avatar:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnarutokonoha.com%2Fimagens-do-anime-naruto-para-imprimir-e-colorir%2F&psig=AOvVaw3JpQNy3whYk7pd9h2wj8c0&ust=1653996648511000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLi6wuePh_gCFQAAAAAdAAAAABAo',
        status:'active'
    },
    {
        id:'4',
        name:'teste4',
        email:'teste4@hotmail.com',
        avatar:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fanmtv.com.br%2Fdemon-slayer-nova-temporada-do-anime-tem-imagens-reveladas%2F&psig=AOvVaw3JpQNy3whYk7pd9h2wj8c0&ust=1653996648511000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLi6wuePh_gCFQAAAAAdAAAAABA5',
        status:'inactive'
    },
    {
        id:'5',
        name:'teste5',
        email:'teste5@hotmail.com',
        avatar:'https://www.google.com/url?sa=i&url=https%3A%2F%2Faniyuki.com%2Fpt%2Favatar-tristes-anime%2F&psig=AOvVaw3JpQNy3whYk7pd9h2wj8c0&ust=1653996648511000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLi6wuePh_gCFQAAAAAdAAAAABBF',
        status:'active'
    }
]

export const dataAnimes = [
    {
        id:'1',
        name:'anime1',
        thumb:'...'
    }
]


const datas = (req : NextApiRequest, res : NextApiResponse) => {


    return res.status(200).json({
        animes:dataAnimes,
        users:dataUsers
    })
}

export default datas