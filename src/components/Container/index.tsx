import * as React from 'react'
import { defaultProps } from '../../../utils/types'
import { Style } from './index.styles'

type Props = {
    column?:boolean
}

const Container = ({
    children,
} : defaultProps & Props) => {

    return(
        <Style>
            {children}
        </Style>
    )
}

export default Container