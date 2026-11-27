import { Text, Title } from '@mantine/core'

interface SectionTitleProps {
  id: string
  title: string
  lead?: string
  order?: 1 | 2
}

/** Título de sección en Micky verde sobre fondo blanco, como en yaknel.com. */
export function SectionTitle({ id, title, lead, order = 2 }: SectionTitleProps) {
  return (
    <>
      <Title id={id} order={order} c="verde.6">
        {title}
      </Title>
      {lead && (
        <Text mt="sm" maw={620} c="tinta.5" className="subtitle">
          {lead}
        </Text>
      )}
    </>
  )
}
