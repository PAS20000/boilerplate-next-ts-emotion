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
    h,
    mg,
    grid,
    border,
    b_Radius,
    tag,
    animation,
} : CreateStyle) : string =>  {

    return`
        ${flex && 'display: flex'};
        ${grid && 'display: grid'};
        ${flex && 'flex-wrap: wrap'};
        ${!flex && columns && `grid-template-columns: ${columns}`};
        ${!flex && rows && `grid-template-rows: ${rows}`};
        ${flex && column ? 'flex-direction: column' : 'flex-direction: row'};
        ${border && `border: ${border}`};
        ${b_Radius && `border-radius: ${b_Radius}`};
        ${animation && `@keyframes show {
            from{
                opacity: 0;
            }
            to{
                opacity: 1;
            }
        }
            animation: ${animation} 1s;
        `}

        background-color: ${bg && bg};
        width: ${w ? w : 'auto'};
        height: ${h ? h : 'auto'};
        padding: ${pd && pd};
        margin: ${mg && mg};

        ${tag === 'NEXTLINK' && `a{
            ${flex && 'display: flex'};
            ${grid && 'display: grid'};
            ${flex && 'flex-wrap: wrap'};
            ${!flex && columns && `grid-template-columns: ${columns}`};
            ${!flex && rows && `grid-template-rows: ${rows}`};
            ${flex && column ? 'flex-direction: column' : 'flex-direction: row'};
            ${border && `border: ${border}`};
            ${b_Radius && `border-radius: ${b_Radius}`};
            
            background-color: ${bg && bg};
            width: ${w ? w : 'auto'};
            height: ${h ? h : 'auto'};
            padding: ${pd && pd};
            margin: ${mg && mg};
        }`
    }
    `
}

const teste = styled.div`
  font-size: 123px;
  font-family: 1231px;
  font-weight: 1341;
  text-transform: capitalize;
  transform: translate();
  transition: 1s;
  opacity: 1;
  @media(max-width: 900px){

  }
  @keyframes show {
      from{
          opacity: 0;
      }
      to{
          opacity: 1;
      }
  }
  animation: show 1s;
  :hover{

  }
  :focus{

  }
`
const StyleDiv = styled.div<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleInput = styled.input<CreateStyle>`
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

const StyleH1 = styled.h1<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleH2 = styled.h2<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleH3 = styled.h3<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleH4 = styled.h4<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleH5 = styled.h5<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleH6 = styled.h6<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleP = styled.p<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleTable = styled.thead<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleThead = styled.thead<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleTbody = styled.tbody<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleTfoot = styled.tfoot<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleTr = styled.tr<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleTd = styled.td<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleTh = styled.th<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleImg = styled.img<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleA = styled.a<CreateStyle>`
    ${props => Styles({...props, ...props.theme})}
`

const StyleTextArea = styled.textarea<CreateStyle>`
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
    StyleH1,
    StyleH2,
    StyleH3,
    StyleH4,
    StyleH5,
    StyleH6,
    StyleP,
    StyleThead,
    StyleTbody,
    StyleTfoot,
    StyleTd,
    StyleTr,
    StyleTh,
    StyleTable,
    StyleA,
    StyleImg,
    StyleInput,
    StyleTextArea,
    Styles,
}