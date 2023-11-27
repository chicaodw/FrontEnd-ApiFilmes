import styled from "styled-components";

export const TitleDiv = styled.div`
    margin-top: 52px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 500px) {
        justify-content: left;
        margin-top: 40px;
    }
`

export const H1 = styled.h1`
    width: 781px;
    color: #fff;
    font-size: 48px;
    line-height: 56px;
    text-align: center;

    @media screen and (max-width: 500px) {
        margin-left: 16px;
        width: 281px;
        font-size: 24px;
        text-align: justify;
        line-height: 28px;
        margin-left: 12px;
    }
`
