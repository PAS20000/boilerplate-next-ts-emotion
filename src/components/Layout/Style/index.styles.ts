import styled from "@emotion/styled";
import CreateStyle, { TCreateStyle } from "./CreateStyle/index.styles";





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
const StyleDiv = styled.div<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleInput = styled.input<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleForm = styled.form<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleArticle = styled.article<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleSection = styled.section<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleAside = styled.aside<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleNav = styled.nav<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleMenu = styled.menu<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleHeader = styled.header<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleMain = styled.main<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleBody = styled.body<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleFooter = styled.footer<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleButton = styled.button<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleSpan = styled.span<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleH1 = styled.h1<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleH2 = styled.h2<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleH3 = styled.h3<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleH4 = styled.h4<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleH5 = styled.h5<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleH6 = styled.h6<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleP = styled.p<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleTable = styled.thead<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleThead = styled.thead<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleTbody = styled.tbody<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleTfoot = styled.tfoot<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleTr = styled.tr<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleTd = styled.td<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleTh = styled.th<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleImg = styled.img<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleA = styled.a<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
`

const StyleTextArea = styled.textarea<TCreateStyle>`
    ${props => CreateStyle({...props, ...props.theme})}
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
    CreateStyle,
}