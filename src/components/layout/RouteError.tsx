import { Button, Container, Stack, Text, Title } from '@mantine/core'
import { isRouteErrorResponse, Link, useRouteError } from 'react-router'

export function RouteError() {
  const error = useRouteError()
  const message = isRouteErrorResponse(error)
    ? `${error.status} · ${error.statusText}`
    : 'Something went wrong loading this page.'

  return (
    <Container size="sm" py={120}>
      <Stack align="flex-start">
        <Title order={1}>Oops</Title>
        <Text size="lg">{message}</Text>
        <Button component={Link} to="/">
          Back home
        </Button>
      </Stack>
    </Container>
  )
}
