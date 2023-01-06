import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Layout } from '../components/layouts/Layout'
import { Grid } from '@nextui-org/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    return (
      <Layout title="Listado de Pokémons">
        <Grid.Container gap={2} justify="flex-start">
        </Grid.Container>
    </Layout>
    );
}
