import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, Description, Film, Title } from "./styles";
import { baseURL } from '@/serviceApi/api';

export default function CardFilm({ ...props }) {
    const router = useRouter();

    return (
        <Card onClick={() => router.push(`/movie/${props.id}`)}>
            <Film src={`${baseURL}${props.foto}`} width={176} height={264} alt="" priority={true} />
            <Title>{props.title}</Title>
            <Description>12 NOV 2021</Description>
        </Card>
    )
}