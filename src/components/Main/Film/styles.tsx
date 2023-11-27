import styled from 'styled-components';
import Image from 'next/image';

export const Card = styled.div`
    margin-bottom: 48px;
    cursor: pointer;
`
export const Title = styled.h2`
    width: 170px;
    margin: 8px 0 0 0;
    font-size: 16px;
    line-height: 24px;
    color: #000;
`
export const Description = styled.h2`
    margin: 3px 0 0 0;
    font-size: 14px;
    color: #646464;
`
export const Film = styled(Image)`
    @media screen and (max-width: 500px) {
        width: 156px;
        height: 232px;
    }
`
