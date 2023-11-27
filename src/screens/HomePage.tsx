'use client'
import Bar from "@/components/Header/Bar";
import Filter from "@/components/Header/Filter";
import HeaderPage from "@/components/Header/HeaderPage";
import Title from "@/components/Header/Title";
import Main from "@/components/Main";

export default function HomePage() {
    return (
        <>
            <HeaderPage>
                <Bar/>
                <Title/>
                <Filter/>
            </HeaderPage>
            <Main/>
        </>
    )
}