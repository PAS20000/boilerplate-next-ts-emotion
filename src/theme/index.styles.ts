import '@emotion/react'
import { Theme } from '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
      colors?: {
        primary:string
        secondary: string
        bg:string
      }
    }
  }

export const light : Theme = {
    colors: {
        primary:'pink',
        secondary:'red',
        bg:'#fff'
    }
}

export const dark : Theme = {
    colors: {
        primary:'red',
        secondary:'pink',
        bg:'#000'
    }
}