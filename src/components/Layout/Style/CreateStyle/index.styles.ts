import { Theme } from "@emotion/react"
import styled from "@emotion/styled"
import { Props } from ".."
import { Styles } from "../../../../../utils/types"

export type TCreateStyle = Props & Theme

const CreateStyles = ({
    flex,
    column,
    columns,
    bg,
    rows,
    pd,
    w,
    h,
    mg,
    grid,
    border,
    b_Radius,
    animation,
    f_size,
    f_weight,
    f_family,
    t_transform,
    transform,
    transition,
    op,
} : Styles) => {
    return`
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
        ${flex && 'display: flex'};
        ${grid && 'display: grid'};
        ${flex && 'flex-wrap: wrap'};
        ${!flex && columns && `grid-template-columns: ${columns}`};
        ${!flex && rows && `grid-template-rows: ${rows}`};
        ${flex && column ? 'flex-direction: column' : 'flex-direction: row'};
        ${border && `border: ${border}`};
        ${b_Radius && `border-radius: ${b_Radius}`};
        ${flex && 'display: flex'};
        ${grid && 'display: grid'};
        ${flex && 'flex-wrap: wrap'};
        ${!flex && columns && `grid-template-columns: ${columns}`};
        ${bg && `background-color: ${bg}`};
        ${w && `width:${w}`};
        ${h && `height: ${h}`};
        ${pd && `padding: ${pd}`};
        ${mg && `margin: ${mg}`};
        ${f_size && `font-size ${f_size}`};
        ${f_family && `font-family: ${f_family}`};
        ${f_weight && `font-weight: ${f_weight}`};
        ${t_transform && `text-transform: ${t_transform}`};
        ${transform && `transform: ${transform}`}; 
        ${transition && `transition: ${transition}`};
        ${op && `opacity: ${op}`};
    `
}

const CreateStyle = (props: TCreateStyle) : string =>  {
    
    const { tag, _hover, _focus, _media } = props

    return`
        ${tag === 'NEXTLINK' && `a{
            ${CreateStyles({...props})}

            ${_hover && `:hover{
                ${CreateStyles({..._hover})}
            }`}
        }`
    }
    ${tag !== 'NEXTIMG' && tag !== 'NEXTLINK' && `

        ${CreateStyles({...props})}
    
        ${_hover && `:hover{
            ${CreateStyles({..._hover})}
        }`}
        ${_focus && `:focus{
            ${CreateStyles({..._focus})}
        }`}
        ${_media && `:hover{
            ${CreateStyles({..._media})}
        }`}
    `}
`}

export default CreateStyle

export const Testes = styled.div`
    background-color: red;
    :hover{
        transition: 1s;
        background-color: blue;
    }
    :focus{

    }
`