import * as React from 'react'

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