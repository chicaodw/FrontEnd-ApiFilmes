import { Film } from "@/components/Main/Film/styles";
import { baseURL } from "@/serviceApi/api";



export default function FilmCover( {...props} ) {
    return (
        <Film src={`${baseURL}${props.poster_path}`} width={383} height={574} alt="" priority={true} />
    
    )
}