import * as React from 'react'
import AuthProvider from './AuthContext'
import ThemeProviderApp from './ThemeContext'

type Props = {
    children:React.ReactNode
}

export const GlobalProvider = ({
    children
} : Props) => {

    return(
        <ThemeProviderApp>
            <AuthProvider>
                {children}
            </AuthProvider>
        </ThemeProviderApp>
    )
}

export default GlobalProvider