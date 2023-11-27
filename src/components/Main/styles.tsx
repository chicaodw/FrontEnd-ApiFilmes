import styled from 'styled-components';

export const MainContainer = styled.main`
    max-width: 80%;
    padding: 29px 32px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    

    @media screen and (max-width: 500px) {
        max-width: 100%;
        padding: 29px 16px;
    }

    @media screen and (max-width: 360px) {
        max-width: 100%;
        padding: 29px 16px;
    }
`