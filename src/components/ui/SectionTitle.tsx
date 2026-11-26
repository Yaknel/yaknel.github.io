import { Text, Title } from '@mantine/core'

interface SectionTitleProps {
  id: string
  title: string
  lead?: string
  order?: 1 | 2
}

/** Título de sección en Micky, mayúsculas, como en yaknel.com. Hereda el color de la franja. */
export function SectionTitle({ id, title, lead, order = 2 }: SectionTitleProps) {
  return (
    <>
      <Title id={id} order={order} c="inherit">
        {title}
      </Title>
      {lead && (
        <Text mt="sm" maw={620} c="inherit" className="subtitle">
          {lead}
        </Text>
      )}
    </>
  )
}
