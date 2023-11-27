import { useState } from 'react';
import RatingCircle from "./RatingCircle";

export default function RatingFilm({...props}){
    const [vot, setVot] = useState(props.vote_average)

    return(
        <RatingCircle  voteAverage={vot} />
    )
}