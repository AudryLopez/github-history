import { FC } from 'react';
import Head from "next/head";
import Navbar from '../ui/Navbar'

interface prop {
  title?: string,
  children?: any
}

export const Layout: FC<prop> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Github History"}</title>
        <meta name="author" content="Audry Lopez" />
        <meta name="description" content="pokemon information" />
        <meta name="keywords" content="pokedex, pokemones, pokedex" />
      </Head>
      <Navbar/>
      <main>
        {children}
      </main>
    </>
  );
};