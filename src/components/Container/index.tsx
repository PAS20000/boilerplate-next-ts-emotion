import * as React from 'react'
import { childrenProps } from '../../../utils/types'
import { StyleArticle, StyleAside, StyleBody, StyleButton, StyleDiv, StyleFooter, StyleForm, StyleHeader, StyleMain, StyleNav } from './index.styles'

type Tags = [
        'article', 
        'section', 
        'aside',
        'header',
        'body',
        'div',
        'form',
        'nav',
        'footer',
        'button',
        'main'
    ]

export type Props = {
    flex?:boolean
    column?:boolean
    columns?:string
    rows?:string
    bg?:string
    tag?:Tags[number]
}

const Container = (props:childrenProps<Props>) => {

    const { tag } = props

    if(!tag || tag === 'div'){
        return <StyleDiv {...props} />
    }
    if(tag === 'article'){
        return <StyleArticle {...props} />
    }
    if(tag === 'aside'){
        return <StyleAside {...props} />
    } 
    if(tag === 'header'){
        return <StyleHeader {...props} />
    }
    if(tag === 'body'){
        return <StyleBody {...props} />
    }
    if(tag === 'form'){
        return <StyleForm {...props} />
    }
    if(tag === 'nav'){
        return <StyleNav {...props} />
    }
    if(tag === 'footer'){
        return <StyleFooter {...props} />
    }
    if(tag === 'button'){
        return <StyleButton {...props} />
    }
    if(tag === 'main'){
        return <StyleMain {...props} />
    }
}

export default Container