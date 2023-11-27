import { ButtonConainer, FilterContainer, TitleFilter } from "./styles";

import Button from "./Button";
import { filterData } from '../../../mocks/filterData';

export default function Filter() {

    return (
        <>
            <FilterContainer>
                <TitleFilter>
                    FILTRE POR:
                </TitleFilter>
            </FilterContainer>

            <ButtonConainer>
                {filterData.map(({ id, label }) => (
                    <Button key={id}>{label}</Button>
                ))}
            </ButtonConainer>
        </>
    )
}