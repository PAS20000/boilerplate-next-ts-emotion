import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { Props } from ".";

type CreateStyle = Props & Theme

const styles = ({
    flex,
    column,
    columns,
    bg,
    rows,
    color,
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
    ${props => styles({...props, ...props.theme})}
`

export const StyleForm = styled.form<CreateStyle>`
    ${props => styles({...props, ...props.theme})}
`

export const StyleArticle = styled.article<CreateStyle>`
    ${props => styles({...props, ...props.theme})}
`

export const StyleSection = styled.section<CreateStyle>`
    ${props => styles({...props, ...props.theme})}
`

export const StyleAside = styled.aside<CreateStyle>`
    ${props => styles({...props, ...props.theme})}
`

export const StyleNav = styled.nav<CreateStyle>`
    ${props => styles({...props, ...props.theme})}
`

export const StyleMenu = styled.menu<CreateStyle>`
    ${props => styles({...props, ...props.theme})}
`

export const StyleHeader = styled.header<CreateStyle>`
    ${props => styles({...props, ...props.theme})}
`

export const StyleMain = styled.main<CreateStyle>`
    ${props => styles({...props, ...props.theme})}
`

export const StyleBody = styled.body<CreateStyle>`
    ${props => styles({...props, ...props.theme})}
`

export const StyleFooter = styled.footer<CreateStyle>`
    ${props => styles({...props, ...props.theme})}
`

export const StyleButton = styled.button<CreateStyle>`
    ${props => styles({...props, ...props.theme})}
`