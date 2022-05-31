import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { Props } from ".";

type CreateStyle = Props & Theme

const Styles = ({
    flex,
    column,
    columns,
    bg,
    rows,
    colors,
    pd,
    w,
    h
} : CreateStyle) => {
    return`
        display: ${flex ? 'flex' : 'grid'};
        ${flex && 'flex-wrap: wrap;'}
        ${!flex && columns && `grid-template-columns: ${columns}`};
        ${!flex && rows && `grid-template-rows: ${rows}`};
        ${flex && column ? 'flex-direction: column' : 'flex-direction: row'};
        background-color: ${bg ? bg : colors.bg};
        width: ${w ? w:'auto'};
        padding: ${pd && pd};
        
    `
}
const sadasd = styled.div`
    
`
const StyleDiv = styled.div<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleForm = styled.form<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleArticle = styled.article<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleSection = styled.section<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleAside = styled.aside<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleNav = styled.nav<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleMenu = styled.menu<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleHeader = styled.header<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleMain = styled.main<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleBody = styled.body<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleFooter = styled.footer<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleButton = styled.button<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleSpan = styled.span<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
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
    Styles,
}