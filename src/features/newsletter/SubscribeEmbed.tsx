import { Button, Group, TextInput } from '@mantine/core'
import { useState, type FormEvent } from 'react'
import { config } from '@/lib/config'
import classes from './SubscribeEmbed.module.css'

/**
 * Casilla de suscripción con el estilo de la web. Al enviar, abre la página de Substack
 * con el correo ya escrito: la suscripción se confirma allí, sin backend propio.
 */
export function SubscribeEmbed({ label = 'Suscríbete <3' }: { label?: string }) {
  const [email, setEmail] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const url = `${config.substackUrl}/subscribe?email=${encodeURIComponent(email.trim())}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form} aria-label="Suscripción a la newsletter">
      <Group gap="sm" justify="center" wrap="wrap">
        <TextInput
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          placeholder="Tu correo"
          aria-label="Tu correo"
          classNames={{ input: classes.input }}
          className={classes.field}
        />
        <Button type="submit" variant="outline" color="white" className={classes.button}>
          {label}
        </Button>
      </Group>
    </form>
  )
}
