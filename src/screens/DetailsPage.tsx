'use client'

import HeaderDetails from "@/components/Details/HeaderDetails";
import Bar from "@/components/Header/Bar";
import HeaderPage from "@/components/Header/HeaderPage";

export default function DetailsPage({...props}) {
    return (
        <>
            <HeaderPage>
                <Bar/>
                <HeaderDetails {...props} />
            </HeaderPage>
        </>
    )
}