import DetailsPage from "@/screens/DetailsPage";

async function getFimlDetails(id: string) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e9dcde07c6b43293a2a0c589b4248ee7`);
    return response.json();
}

export default async function DetailsFilm({params}:{params:{id : string}}){
   
    const filmDetail = await getFimlDetails(params.id);

    console.log("Estamos aqui", filmDetail);
    
    return(
        <>
            <DetailsPage {...filmDetail} />
        </>
    )
}