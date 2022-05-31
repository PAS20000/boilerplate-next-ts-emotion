import * as React from 'react'
import { ThemeContext, ThemeCTX } from '../../contexts/ThemeContext'


const useThemeCTX = () : ThemeCTX  => {
    const { mode, setMode, dark, light } = React.useContext(ThemeContext)

    return {
        mode,
        setMode,
        dark,
        light
    }
}

export default useThemeCTX