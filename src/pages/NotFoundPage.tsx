import { Button, Text, Title } from '@mantine/core'
import { Link } from 'react-router'
import { Band } from '@/components/ui/Band'
import { Seo } from '@/components/ui/Seo'

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Página no encontrada" />
      <Band tone="morado" labelledBy="nf-title">
        <Text c="mostaza.6" fw={700}>
          404
        </Text>
        <Title id="nf-title" order={1} c="white" my="md">
          Esta página se perdió en la bruma
        </Title>
        <Button component={Link} to="/" color="mostaza">
          Volver al inicio
        </Button>
      </Band>
    </>
  )
}
