import * as React from 'react'
import { childrenProps } from '../../../utils/types'
import { StyleArticle, StyleAside, StyleBody, StyleDiv, StyleFooter, StyleForm, StyleHeader, StyleNav } from './index.styles'

type Tags = [
        'article', 
        'section', 
        'aside',
        'header',
        'body',
        'div',
        'form',
        'nav',
        'footer'
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

    if(!props.tag || props.tag === 'div'){
        return <StyleDiv {...props} />
    }
    if(props.tag === 'article'){
        return <StyleArticle {...props} />
    }
    if(props.tag === 'aside'){
        return <StyleAside {...props} />
    } 
    if(props.tag === 'header'){
        return <StyleHeader {...props} />
    }
    if(props.tag === 'body'){
        return <StyleBody {...props} />
    }
    if(props.tag === 'form'){
        return <StyleForm {...props} />
    }
    if(props.tag === 'nav'){
        return <StyleNav {...props} />
    }
    if(props.tag === 'footer'){
        return <StyleFooter {...props} />
    }
}

export default Container