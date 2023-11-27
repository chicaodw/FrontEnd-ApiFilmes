'use client'
import { useEffect, useState } from "react";
import CardFilm from "./Film";
import PaginationContainer from "./PaginationContainer";
import { MainContainer } from "./styles";
import { API_URL_POPULAR } from "@/serviceApi/api";

type Film = {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
}

export default function Main() {

    const [film, setFilm] = useState<Film[]>([]);

    useEffect(() =>{
        async function getData(){
            const response = await fetch(API_URL_POPULAR,{
                next:{ 
                    revalidate: 30
                }
            });
            
            if (!response.ok) {
                throw new Error("Falid fetch");
            }
            
            const data = await response.json();
            setFilm(data.results);
        }

        getData();
    }, []);

    return (
        <>
            <MainContainer>
               
                {film && film.map((film) => (
                    <CardFilm 
                        key={film.id}
                        id = {film.id}
                        title ={film.title}
                        foto = {film.poster_path}

                    />
                ))
                }
            </MainContainer>

            <PaginationContainer />
        </>
    );
}