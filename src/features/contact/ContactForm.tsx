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
      name: isNotEmpty('Please tell me your name'),
      email: isEmail('This email doesn’t look right'),
      message: (v) =>
        v.trim().length < 10 ? 'Tell me a little more (at least 10 characters)' : null,
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
        title: 'Couldn’t send',
        message: 'Please try again in a few minutes.',
      })
    } finally {
      setSubmitting(false)
    }
  })

  if (sent) {
    return (
      <Alert color="verde" icon={<IconCheck />} title="Message sent!">
        Thank you for writing. I’ll get back to you soon.
      </Alert>
    )
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      noValidate
      p={0}
      radius={0}
      bg="white"
      c="var(--mantine-color-black)"
    >
      <Stack gap="md">
        {!config.formspreeId && (
          <Alert color="mostaza" icon={<IconInfoCircle />}>
            Test mode: missing <code>VITE_FORMSPREE_ID</code>.
          </Alert>
        )}

        <Group grow align="flex-start" preventGrowOverflow={false} wrap="wrap">
          <TextInput
            label="Name"
            autoComplete="name"
            required
            miw={220}
            key={form.key('name')}
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            type="email"
            autoComplete="email"
            required
            miw={220}
            key={form.key('email')}
            {...form.getInputProps('email')}
          />
        </Group>

        <Select
          label="Subject"
          data={subjectOptions}
          allowDeselect={false}
          key={form.key('subject')}
          {...form.getInputProps('subject')}
        />

        <Textarea
          label="Message"
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

        <Stack gap="xs" mt="sm">
          <Button fullWidth type="submit" size="md" color="lila" loading={submitting}>
            SEND MESSAGE
          </Button>
          <Text size="sm" c="dimmed" ta="center">
            Your email is only used to reply to you.
          </Text>
        </Stack>
      </Stack>
    </Paper>
  )
}
