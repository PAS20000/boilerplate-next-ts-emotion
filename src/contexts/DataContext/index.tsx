import * as React from 'react'
import { defaultProps, SetState } from '../../../utils/types'

export type DataCTX = {
    data: Object[]
    setData:SetState<Object[]>
}

export const DataContext = React.createContext<DataCTX>(null)

const DataProvider = ({
    children
} : defaultProps) => {
    const [data, setData] = React.useState<Object[]>()
    
    React.useEffect(() => {
        
    }, [])

   return(
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    )
}
   
export default DataProvider