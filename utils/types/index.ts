import React, { ReactText, SyntheticEvent } from 'react'

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>

export type defaultProps = {
    children?:React.ReactNode
    onClick?:React.MouseEventHandler
    onChange?:React.FormEventHandler
    onSumibt?:React.FormEventHandler
    onMouseLeave?:React.FormEventHandler
    onMouseEnter?:React.FormEventHandler
}

export type childrenProps<T> = React.PropsWithChildren<T & defaultProps>