import '@emotion/react'
import { Theme } from '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
      color?: {
        primary:string
        secondary: string
      }
    }
  }

export const light : Theme = {
    color: {
        primary:'#fff',
        secondary:'#000'
    }
}

export const dark : Theme = {
    color: {
        primary:'#000',
        secondary:'#fff'
    }
}