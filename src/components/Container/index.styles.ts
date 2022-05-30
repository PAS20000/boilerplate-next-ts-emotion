import styled from "@emotion/styled";
import { Props } from ".";


export const Style = styled.div<Props>`
    display: ${props => 
        props.flex ? 'flex' : 'grid'
    };
    grid-template-columns: ${props =>
        !props.flex && props.columns
    };
    grid-template-rows:${props =>
        !props.flex && props.rows
    };
    flex-direction: ${props => 
        props.flex && props.column ? 'column' : 'row'
    };
    background-color: ${props => 
        props.bg ? props.bg : props.theme.color.bg
    };
`