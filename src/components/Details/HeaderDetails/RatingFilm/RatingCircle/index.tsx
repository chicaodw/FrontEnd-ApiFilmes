import { useState } from 'react';
import { CircleContainer, CircleBackground, Container, CircleBorder } from "./styles";

export default function RatingCircle({ ...props }) {
    const percen = (props.voteAverage / 10) * 100;
    const [percentage, setPercentage] = useState(percen);

    return (
        <Container>
            <CircleContainer >
                <CircleBackground>
                    <CircleBorder percentage={percentage}>76</CircleBorder>
                </CircleBackground>
            </CircleContainer>
        </Container>
    )
}