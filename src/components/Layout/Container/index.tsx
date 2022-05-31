import * as React from 'react'
import Emotion from './index.styles'
import { childrenProps } from '../../../../utils/types'

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
        'main',
        'span'
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
        return <Emotion.StyleDiv {...props} />
    }
    if(tag === 'article'){
        return <Emotion.StyleArticle {...props} />
    }
    if(tag === 'aside'){
        return <Emotion.StyleAside {...props} />
    } 
    if(tag === 'header'){
        return <Emotion.StyleHeader {...props} />
    }
    if(tag === 'body'){
        return <Emotion.StyleBody {...props} />
    }
    if(tag === 'form'){
        return <Emotion.StyleForm {...props} />
    }
    if(tag === 'nav'){
        return <Emotion.StyleNav {...props} />
    }
    if(tag === 'footer'){
        return <Emotion.StyleFooter {...props} />
    }
    if(tag === 'button'){
        return <Emotion.StyleButton {...props} />
    }
    if(tag === 'main'){
        return <Emotion.StyleMain {...props} />
    }
    if(tag === 'section'){
        return <Emotion.StyleSection {...props} />
    }
    if(tag === 'span'){
        return <Emotion.StyleSpan {...props}/>
    }
}

export default Container