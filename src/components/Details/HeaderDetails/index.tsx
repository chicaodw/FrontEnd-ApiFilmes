import FilmCover from "./FilmCover";
import RatingFilm from "./RatingFilm";
import TitleArea from "./TitleArea";
import { HeaderContainer } from "./styles";

export default function HeaderDetails({...props}){
    return(
        <>
            <HeaderContainer>
                <FilmCover {...props }/>
                <TitleArea {...props }/>
                <RatingFilm {...props}/>
            </HeaderContainer>

        </>
    )
}