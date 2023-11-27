import styled from 'styled-components';

export const FilterContainer = styled.div`
    margin-top: 5px;
    display: flex;
    justify-content: center;
   
    @media screen and (max-width: 500px) {
        justify-content: left;
        margin-left: 13px;
    }
`

export const TitleFilter = styled.h1`
    font-size: 14px;
    line-height: 20px;
    color: #fff;
    @media screen and (max-width: 500px) {
        margin: 0;
    }
`

export const ButtonConainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 80%;
    justify-content: center;
    margin-top: 6px;
    padding-bottom: 40px;
    text-align: center;

    @media screen and (max-width: 500px) {
        justify-content: left;
        width: 98%;
        margin: 0;
        text-align: left;
        margin-left: 6px;
    }
`