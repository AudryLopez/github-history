import { Inter } from '@next/font/google'
import { Layout } from '../components/layouts/Layout'
import { Grid } from '@nextui-org/react'
import GitTable from '../components/ui/Table';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    return (
      <Layout title="Listado de Pokémons">
        <Grid.Container gap={2} justify="flex-start">
          <GitTable />
        </Grid.Container>
    </Layout>
    );
}
