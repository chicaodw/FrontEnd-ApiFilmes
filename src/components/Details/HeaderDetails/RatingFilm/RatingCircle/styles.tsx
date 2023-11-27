import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`
export const CircleContainer = styled.div`
    position: relative;
    width: 65px;
    height: 65px;
`

export const CircleBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
`

interface RatingCircleProps {
    percentage: number;
}

export const CircleBorder = styled.div<RatingCircleProps>`
       position: absolute;
  top: 0; /* ajuste para compensar a largura da borda */
  left: 0; /* ajuste para compensar a largura da borda */
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(
    #4caf50 0% ${props => (props.percentage / 100) * 360}deg,
    transparent 0% 100%
  );
`