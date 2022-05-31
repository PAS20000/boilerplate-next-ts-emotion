import React from 'react'

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