import styled from "@emotion/styled";
import { Props } from ".";


export const Style = styled.div<Props>`
    display: ${props => props.flex ? 'flex' : 'grid'};
    flex-direction: ${props => props.flex && props.column ? 'column' : 'row'};
    background-color: ${props => props.bg ? props.bg : props.theme.color.bg};
`