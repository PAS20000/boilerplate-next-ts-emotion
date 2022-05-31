import { Theme } from "@emotion/react";
import styled, { CreateStyledComponent } from "@emotion/styled";
import { Props } from ".";

type CreateStyle = Props & Theme

const styles = ({
    flex,
    column,
    columns,
    color,
    bg,
    rows
} : CreateStyle) => {
    return`
        display: ${flex ? 'flex' : 'grid'};
        grid-template-columns: ${!flex && columns};
        grid-template-rows:${!flex && rows};
        flex-direction: ${flex && column ? 'column' : 'row'};
        background-color: ${bg ? bg : color.bg}
    `
}


export const StyleDiv = styled.div<CreateStyle>`
    ${props  => styles(props)}
`

export const StyleForm = styled.form<CreateStyle>`
    ${props  => styles(props)}
`

export const StyleArticle = styled.article<CreateStyle>`
    ${props  => styles(props)}
`

export const StyleSection = styled.section<CreateStyle>`
    ${props  => styles(props)}
`

export const StyleAside = styled.aside<CreateStyle>`
    ${props  => styles(props)}
`

export const Style = styled.div<CreateStyle>`
    ${props  => styles(props)}
`