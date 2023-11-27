import { HeaderArea } from "./styles";

export default function HeaderPage({ ...props }) {
    return (
        <HeaderArea>
            {props.children}
        </HeaderArea>
    )
}