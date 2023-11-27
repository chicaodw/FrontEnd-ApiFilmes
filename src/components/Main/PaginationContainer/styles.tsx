import styled from 'styled-components';

export const PaginContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 100px ;
`;

export const PaginList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PaginItem = styled.li`
    margin: 0;
   
`

export const PaginButton = styled.button`
    width: 42px;
    height: 40px;
    border:none;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    background-color: #fff;
    color:#5C16C5;
    cursor: pointer;

    &:hover{
        border: 1px solid #5C16C5;
    }
`

export const PaginButtonArrow = styled(PaginButton)`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
`

export const PaginButtonText = styled(PaginButton)`
    width: 100%;
`
