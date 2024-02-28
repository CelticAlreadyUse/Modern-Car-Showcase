import { MouseEventHandler } from "react";

export type CustomButton = {
    title:string;
containerStyles?:string;
handleClick?:MouseEventHandler<HTMLButtonElement>
btnType?:"button" | 'submit';
}