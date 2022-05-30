import * as React from 'react'
import { ThemeProvider } from '@emotion/react' 
import { defaultProps, SetState } from '../../types'
import { light } from '../../theme/index.styles'

type mode = 'dark' | 'light'

export type Theme = {
    mode:mode
    setMode:SetState<mode>
}



export const ThemeContext = React.createContext<Theme>(null)

const ThemeProviderApp = ({
    children
} : defaultProps) => {
    const [mode, setMode] = React.useState<mode>('light')
    
   return(
        <ThemeContext.Provider value={{mode, setMode}}>
            <ThemeProvider theme={light}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
   
export default ThemeProviderApp