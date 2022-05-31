import * as React from 'react'
import { childrenProps } from '../../../../utils/types'
import { Style } from './index.styles'

type TypesInput = [
    'button',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week'
]

export type Props = {
    bg?:string
    type?:TypesInput[number]
}

const Input = (props:childrenProps<Props>) => {

    return  <Style {...props} />
}

export default Input