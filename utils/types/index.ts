export type SetState<T> = React.Dispatch<React.SetStateAction<T>>

export type defaultProps = {
    children:React.ReactNode
}

export type childrenProps<T> = React.PropsWithChildren<T & defaultProps>