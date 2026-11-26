import {
  Alert,
  Button,
  Group,
  Paper,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core'
import { isEmail, isNotEmpty, useForm } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import { IconCheck, IconInfoCircle } from '@tabler/icons-react'
import { useState } from 'react'
import { config } from '@/lib/config'
import { sendContactMessage, type ContactMessage } from './api'
import { GENERAL_SUBJECT, subjectOptions } from './subjects'

interface ContactFormProps {
  initialSubject?: string
}

export function ContactForm({ initialSubject = GENERAL_SUBJECT }: ContactFormProps) {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const form = useForm<ContactMessage>({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '', subject: initialSubject, message: '', website: '' },
    validate: {
      name: isNotEmpty('Dime tu nombre'),
      email: isEmail('Este correo no parece válido'),
      message: (v) => (v.trim().length < 10 ? 'Cuéntame un poco más (mínimo 10 caracteres)' : null),
    },
  })

  const handleSubmit = form.onSubmit(async (values) => {
    setSubmitting(true)
    try {
      await sendContactMessage(values)
      setSent(true)
      form.reset()
    } catch {
      notifications.show({
        color: 'rosa',
        title: 'No se pudo enviar',
        message: 'Inténtalo de nuevo en unos minutos.',
      })
    } finally {
      setSubmitting(false)
    }
  })

  if (sent) {
    return (
      <Alert color="verde" icon={<IconCheck />} title="¡Mensaje enviado!">
        Gracias por escribirme. Te responderé lo antes posible.
      </Alert>
    )
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      noValidate
      p={{ base: 'lg', sm: 40 }}
      radius={0}
      bg="white"
      c="var(--mantine-color-black)"
    >
      <Stack gap="md">
        {!config.formspreeId && (
          <Alert color="mostaza" icon={<IconInfoCircle />}>
            Formulario en modo prueba: falta configurar <code>VITE_FORMSPREE_ID</code>.
          </Alert>
        )}

        <Group grow align="flex-start" preventGrowOverflow={false} wrap="wrap">
          <TextInput
            label="Nombre"
            autoComplete="name"
            required
            miw={220}
            key={form.key('name')}
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Correo"
            type="email"
            autoComplete="email"
            required
            miw={220}
            key={form.key('email')}
            {...form.getInputProps('email')}
          />
        </Group>

        <Select
          label="Asunto"
          data={subjectOptions}
          allowDeselect={false}
          key={form.key('subject')}
          {...form.getInputProps('subject')}
        />

        <Textarea
          label="Mensaje"
          required
          autosize
          minRows={5}
          key={form.key('message')}
          {...form.getInputProps('message')}
        />

        {/* Honeypot anti-spam: oculto para personas y lectores de pantalla */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px' }}
          key={form.key('website')}
          {...form.getInputProps('website')}
        />

        <Group justify="space-between" mt="sm">
          <Text size="sm" c="dimmed">
            Tu correo solo se usa para responderte.
          </Text>
          <Button type="submit" size="md" loading={submitting}>
            Enviar
          </Button>
        </Group>
      </Stack>
    </Paper>
  )
}
