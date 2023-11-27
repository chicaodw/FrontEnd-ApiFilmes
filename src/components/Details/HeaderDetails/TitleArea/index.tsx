import React, { useEffect, useState } from 'react';
import { Container, Info, Title } from "./styles";
import { convertMinutes, formatDate } from '@/utils/utils';


type Genre = {
    id: number;
    name: string;
  };
  

export default function TitleArea({ ...props }) {
    console.log(props);
    
    const [years, setYears] = useState(Number);
    const [months, setMonths] = useState(Number);

    //pegando pais 
    const originCountry = props.production_countries[0]?.iso_3166_1;

    //formatando a data
    const dataFormatada = formatDate(props.release_date);
    
    //Convertendo minutos em hora
    const timeFilm = convertMinutes(props.runtime);

    //Pegando informações no array
    const genreArray: Genre[] = props.genres;

    //criando o mapa de strings 
    const genreNames : string = genreArray.map((genre) => genre.name).join(', ');

    useEffect(() => {

        //pegando data api
        const date: Date = new Date(props.release_date);

        //pegando data atual
        const currentDate: Date = new Date();

        //calculando em meses 
        const time: number = (currentDate.getFullYear() - date.getFullYear()) * 12
            + (currentDate.getMonth() - date.getMonth());

        if (time < 12) {
            setMonths(time);

        } else if (time > 12) {
            const years = Math.floor(time / 12);
            setYears(years);
        }

    }, [props.release_date]);


    return (
        <>
            <Container>
                <Title>
                    {props.original_title} ({new Date(props.release_date).getFullYear()})
                </Title>
                <Info>
                    {months > 0 ? `${months} meses` : `${years} anos`} •
                    {dataFormatada} • ({originCountry}) • {genreNames} • {timeFilm}

                </Info>
            </Container>
        </>
    )
}