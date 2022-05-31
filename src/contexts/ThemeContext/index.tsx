import * as React from 'react'
import { Theme, ThemeProvider } from '@emotion/react' 
import { dark, light } from '../../theme/index.styles'
import { PropsCTXdefault, SetState } from '../types'


type mode = 'dark' | 'light'

export type ThemeCTX = {
    mode:mode
    setMode:SetState<mode>
    light:Theme
    dark:Theme
}



export const PasStyleThemeContext = React.createContext<ThemeCTX>(null)

const PasStyleThemeProvider = ({
    children
} : PropsCTXdefault) => {
    const [mode, setMode] = React.useState<mode>('light')

   return(
        <PasStyleThemeContext.Provider value={{mode, setMode, light, dark}}>
            <ThemeProvider theme={mode === 'light' ? light : dark}>
                {children}
            </ThemeProvider>
        </PasStyleThemeContext.Provider>
    )
}
   
export default PasStyleThemeProvider