import { Theme } from "@emotion/react"
import { Props } from ".."

export type TCreateStyle = Props & Theme

const CreateStyle = ({
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
    _media,
    _focus,
    _hover,
    f_size,
    f_weight,
    f_family,
    t_transform,
    transform,
    transition,
    op,
} : TCreateStyle) : string =>  {

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

        ${tag === 'NEXTLINK' && `a{
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
            ${!flex && rows && `grid-template-rows: ${rows}`};
            ${flex && column ? 'flex-direction: column' : 'flex-direction: row'};
            ${border && `border: ${border}`};
            ${b_Radius && `border-radius: ${b_Radius}`};
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
        }`
    }
    `
}

export default CreateStyle