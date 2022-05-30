import styled from "@emotion/styled";
import { Props } from ".";


export const Style = styled.div<Props>(props => ({
    display: props.flex ? 'flex' : 'grid',
}))