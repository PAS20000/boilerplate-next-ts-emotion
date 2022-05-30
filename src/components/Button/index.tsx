import * as React from 'react'
import { childrenProps, defaultProps } from '../../../utils/types'
import { Style } from './index.styles'

export type Props = {
    flex?:boolean
    column?:boolean
    bg?:string
}

const Button = (props:childrenProps<Props>) => {

    return(
        <Style {...props}>
            {props.children}
        </Style>
    )
}

export default Button