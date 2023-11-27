import { ButtonStyle } from "./styles";

export default function Button({...props}){
    return(
        <ButtonStyle>
            {props.children}
        </ButtonStyle>
    )
}