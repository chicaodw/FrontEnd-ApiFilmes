import styled from "styled-components";
import Image from "next/image";

export const DivBar = styled.div`
    display: flex;
    max-width: 100%;
    height: 56px;
    background-color: #E73980;
    align-items: center;

    @media screen and (max-width: 500px) {
        justify-content: center;
    }
`

export const Logo = styled(Image)`
    width: 184px;
    height: 24px;
    margin-left: 112px;


    @media screen and (max-width: 500px) {
        width: 140px;
        height: 18.19px;
        margin: 0;
    }
`