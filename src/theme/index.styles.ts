import '@emotion/react'
import { Theme } from '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
      color?: {
        primary:string
        secondary: string
        bg:string
      }
    }
  }

export const light : Theme = {
    color: {
        primary:'pink',
        secondary:'red',
        bg:'#fff'
    }
}

export const dark : Theme = {
    color: {
        primary:'red',
        secondary:'pink',
        bg:'#000'
    }
}