import * as React from 'react'
import { ThemeContext, ThemeCTX } from '../../contexts/ThemeContext'


const useThemeCTX = () : ThemeCTX  => {
    const { mode, setMode } = React.useContext(ThemeContext)

    return {
        mode,
        setMode
    }
}

export default useThemeCTX