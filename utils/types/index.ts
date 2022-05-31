import * as React from 'react'
import { TCreateStyle } from '../../src/components/Layout/Style/CreateStyle/index.styles'

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>

export type DefaultProps = {
    children?:React.ReactNode
    id?:string
    name?:string
    className?:string
    alt?:string
    onClick?:React.MouseEventHandler
    onChange?:React.FormEventHandler
    onSumibt?:React.FormEventHandler
    onMouseLeave?:React.FormEventHandler
    onMouseEnter?:React.FormEventHandler
}

export type Styles = {
    grid?:boolean
    flex?:boolean
    column?:boolean
    columns?:string
    rows?:string
    bg?:string
    pd?:string
    w?:string
    h?:string
    mg?:string
    tag?:Tags[number]
    src?:string
    href?:string
    border?:string
    b_Radius?:string
    target?:string
    className?:string
    id?:string
    animation?:Animations[number]
    f_size?:string
    f_weight?:string
    f_family?:string
    t_transform?:string
    transform?:string
    transition?:string
    op?:string,
    color?:string
}

export type childrenProps<T> = React.PropsWithChildren<T & DefaultProps>

export type Tags = [
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
    'SPAN',
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'INPUT',
    'P',
    'TD',
    'TR',
    'TH',
    'THEAD',
    'TBODY',
    'TFOOT',
    'TABLE',
    'A',
    'IMG',
    'NEXTLINK',
    'NEXTIMG',
]

export type Animations = [
    'show'
]