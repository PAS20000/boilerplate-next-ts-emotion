import * as React from 'react'
import { childrenProps } from '../../../utils/types'
import { StyleArticle, StyleAside, StyleDiv } from './index.styles'

export type Props = {
    flex?:boolean
    column?:boolean
    columns?:string
    rows?:string
    bg?:string
    tag?:'article' | 'section' | 'aside' | 'header' | 'body' | 'div' | 'form'
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
        return <StyleArticle {...props} />
    }
    if(props.tag === 'body'){
        return <StyleDiv {...props} />
    }
    if(props.tag === 'form'){
        return <StyleDiv {...props} />
    }
}

export default Container