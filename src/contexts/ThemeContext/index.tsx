import * as React from 'react'
import { Theme, ThemeProvider } from '@emotion/react' 
import { defaultProps, SetState } from '../../../utils/types'
import { dark, light } from '../../theme/index.styles'

type mode = 'dark' | 'light'

export type ThemeCTX = {
    mode:mode
    setMode:SetState<mode>
    light:Theme
    dark:Theme
}



export const ThemeContext = React.createContext<ThemeCTX>(null)

const ThemeProviderApp = ({
    children
} : defaultProps) => {
    const [mode, setMode] = React.useState<mode>('light')

   return(
        <ThemeContext.Provider value={{mode, setMode, light, dark}}>
            <ThemeProvider theme={mode === 'light' ? light : dark}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
   
export default ThemeProviderApp