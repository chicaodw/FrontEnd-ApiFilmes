import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from './registry'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Filmes',
  description: 'Teste Técnico Front-End',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={roboto.className}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
        </body>
    </html>
  )
}
