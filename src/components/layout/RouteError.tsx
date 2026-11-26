import { Button, Container, Stack, Text, Title } from '@mantine/core'
import { isRouteErrorResponse, Link, useRouteError } from 'react-router'

export function RouteError() {
  const error = useRouteError()
  const message = isRouteErrorResponse(error)
    ? `${error.status} · ${error.statusText}`
    : 'Algo se ha torcido al cargar esta página.'

  return (
    <Container size="sm" py={120}>
      <Stack align="flex-start">
        <Title order={1}>Ups</Title>
        <Text size="lg">{message}</Text>
        <Button component={Link} to="/">
          Volver al inicio
        </Button>
      </Stack>
    </Container>
  )
}
