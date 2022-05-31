import * as React from 'react'
import Emotion from './index.styles'
import { childrenProps } from '../../../../utils/types'

type Tags = [
        'ARTICLE', 
        'SECTION', 
        'ASIDE',
        'HEADER',
        'BODY',
        'DIV',
        'FORM',
        'NAV',
        'FOOTER',
        'BUTTON',
        'MAIN',
        'SPAN'
    ]

export type Props = {
    flex?:boolean
    column?:boolean
    columns?:string
    rows?:string
    bg?:string
    tag?:Tags[number]
    pd?:string
    w?:string
    h?:string
    mg?:string
}

const PasStyle = (props:childrenProps<Props>) => {

    const { tag } = props

    if(!tag || tag === 'DIV'){
        return <Emotion.StyleDiv {...props} />
    }
    if(tag === 'ARTICLE'){
        return <Emotion.StyleArticle {...props} />
    }
    if(tag === 'ASIDE'){
        return <Emotion.StyleAside {...props} />
    } 
    if(tag === 'HEADER'){
        return <Emotion.StyleHeader {...props} />
    }
    if(tag === 'BODY'){
        return <Emotion.StyleBody {...props} />
    }
    if(tag === 'FORM'){
        return <Emotion.StyleForm {...props} />
    }
    if(tag === 'NAV'){
        return <Emotion.StyleNav {...props} />
    }
    if(tag === 'FOOTER'){
        return <Emotion.StyleFooter {...props} />
    }
    if(tag === 'BUTTON'){
        return <Emotion.StyleButton {...props} />
    }
    if(tag === 'MAIN'){
        return <Emotion.StyleMain {...props} />
    }
    if(tag === 'SECTION'){
        return <Emotion.StyleSection {...props} />
    }
    if(tag === 'SPAN'){
        return <Emotion.StyleSpan {...props} />
    }
}

export default PasStyle