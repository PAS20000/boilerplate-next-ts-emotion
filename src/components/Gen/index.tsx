import * as React from 'react'
import useThemeCTX from '../../hooks/useThemeCTX'
import PasStyle from "../_PasStyle"
import Field from './Field'

type Props = {
    
}

const Gen = () => {

    const { theme } = useThemeCTX()

    const [genStyle, setGenStyle] = React.useState()

    return(
        <PasStyle tag='FORM' mg='30px' pd='15px' bg={theme.colors.bg}>
            <Field />
        </PasStyle>
    )
}

export default Gen