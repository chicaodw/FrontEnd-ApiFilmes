import IconArrowLeft from "@/components/Icon/IconArrowLeft";
import { PaginButton, PaginButtonArrow, PaginButtonText, PaginContainer, PaginItem, PaginList } from "./styles";

export default function PaginationContainer() {
    return (
        <PaginContainer>
            <PaginList>
                <PaginItem>
                    <PaginButton>1</PaginButton>
                </PaginItem>
                <PaginItem>
                    <PaginButton>2</PaginButton>
                </PaginItem>
                <PaginItem>
                    <PaginButton>3</PaginButton>
                </PaginItem>
                <PaginItem>
                    <PaginButtonArrow>
                        <IconArrowLeft />
                    </PaginButtonArrow>
                </PaginItem>
                <PaginItem>
                    <PaginButtonText>Última</PaginButtonText>
                </PaginItem>
            </PaginList>
        </PaginContainer>
    )
}