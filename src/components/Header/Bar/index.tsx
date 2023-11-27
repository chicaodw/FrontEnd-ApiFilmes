'use client'
import Image from "next/image";
import { DivBar, Logo } from "./styles";

export default function Bar() {
    return (
        <DivBar>
            <Logo src="/logo.png" alt="T M D B" priority={true} width={184} height={24}/>
        </DivBar>
    )
}