import * as React from 'react'
import { childrenProps } from '../../../../utils/types'
import { Style } from './index.styles'

export type Props = {
    bg?:string
    type?:'reset' | 'submit'
}

const Button = (props:childrenProps<Props>) => {

    return  <Style {...props} />
}

export default Button