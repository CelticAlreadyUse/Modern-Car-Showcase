import { MouseEventHandler } from "react";

export type CustomButton = {
    title:string;
containerStyles?:string;
handleClick?:MouseEventHandler<HTMLButtonElement>
btnType?:"button" | 'submit';
textStyles?:string
rightIcon?:string
isDisabbled?:boolean
}

export type ManufactureProps = {
    manuFacture:string;
    setManuFacture:(manuFacture:string)=>void
}

export type CarProps = {
    city_mpg:number;
    class:string;
combination_mpg:number;
cylinders:number;
displacement:number;
drive:string;
fuel_type:string;
highway_mpg:number;
make:string;
model:string;
transmission:string;
year:number;
}

export type FilterProps ={
    manufactur:string
    year:number
    fuel:string
    limit:number
    model:string
}
export interface OptionProps{
    title:string,
    value:string
}
export type CustomFilterProps ={
    title:string
    options:OptionProps[]
}

export type ShowMoreProps = {
    PageNumber:number
    isNext:boolean
}