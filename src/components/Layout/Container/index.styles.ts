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

const StyleDiv = styled.div<CreateStyle>`
    ${props => styles({...props, ...props.theme})}
`

const StyleForm = styled.form<CreateStyle>`
    ${props => styles({...props, ...props.theme})}
`

const StyleArticle = styled.article<CreateStyle>`
    ${props => styles({...props, ...props.theme})}
`

const StyleSection = styled.section<CreateStyle>`
    ${props => styles({...props, ...props.theme})}
`

const StyleAside = styled.aside<CreateStyle>`
    ${props => styles({...props, ...props.theme})}
`

const StyleNav = styled.nav<CreateStyle>`
    ${props => styles({...props, ...props.theme})}
`

const StyleMenu = styled.menu<CreateStyle>`
    ${props => styles({...props, ...props.theme})}
`

const StyleHeader = styled.header<CreateStyle>`
    ${props => styles({...props, ...props.theme})}
`

const StyleMain = styled.main<CreateStyle>`
    ${props => styles({...props, ...props.theme})}
`

const StyleBody = styled.body<CreateStyle>`
    ${props => styles({...props, ...props.theme})}
`

const StyleFooter = styled.footer<CreateStyle>`
    ${props => styles({...props, ...props.theme})}
`

const StyleButton = styled.button<CreateStyle>`
    ${props => styles({...props, ...props.theme})}
`

const StyleSpan = styled.span<CreateStyle>`
    ${props => styles({...props, ...props.theme})}
`

export default  {
    StyleArticle,
    StyleAside,
    StyleBody,
    StyleDiv,
    StyleButton,
    StyleFooter,
    StyleForm,
    StyleHeader,
    StyleMain,
    StyleMenu,
    StyleNav,
    StyleSection,
    StyleSpan,
}