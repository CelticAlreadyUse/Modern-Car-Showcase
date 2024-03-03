import { MouseEventHandler } from "react";

export type CustomButton = {
    title:string;
containerStyles?:string;
handleClick?:MouseEventHandler<HTMLButtonElement>
btnType?:"button" | 'submit';
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