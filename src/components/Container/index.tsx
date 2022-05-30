import * as React from 'react'
import { childrenProps } from '../../../utils/types'
import { Style } from './index.styles'

export type Props = {
    flex?:boolean
    column?:boolean
    columns?:string
    rows?:string
    bg?:string
}

const Container = (props:childrenProps<Props>) => {

    return(
        <Style {...props}>
            {props.children}
        </Style>
    )
}

export default Container