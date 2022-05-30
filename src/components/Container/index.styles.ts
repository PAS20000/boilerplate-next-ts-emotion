import styled from "@emotion/styled";

export const Style = styled.div(props => ({
    display: 'flex',
    flexDirection: props.column && 'column'
}))