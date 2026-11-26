import { Image, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import type { CSSProperties } from 'react'
import { SmartButton } from '@/components/ui/SmartButton'
import type { Product } from '@/content/products'
import classes from './ProductList.module.css'

/** Productos como piezas circulares a lo Hilma af Klint, sin cajas. */
export function ProductList({ items, buttonColor }: { items: Product[]; buttonColor: string }) {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={48} mt={48}>
      {items.map((p) => {
        const href = p.checkoutUrl || `/contacto?asunto=${p.id}`
        return (
          <Stack key={p.id} component="article" gap="sm" align="flex-start">
            {p.image ? (
              <Image src={p.image} alt={p.title} loading="lazy" className={classes.disc} />
            ) : (
              <div
                className={classes.disc}
                aria-hidden="true"
                style={{ '--c': `var(--mantine-color-${p.color}-6)` } as CSSProperties}
              >
                <span>{p.title}</span>
              </div>
            )}
            {p.label && (
              <Text tt="uppercase" size="sm" fw={700} style={{ letterSpacing: '0.1em' }}>
                {p.label}
              </Text>
            )}
            <Title order={3} c="inherit">
              {p.title}
            </Title>
            <Text c="inherit">{p.description}</Text>
            <Text fw={700}>{p.price || 'Consultar precio'}</Text>
            <SmartButton href={href} color={buttonColor}>
              {p.checkoutUrl ? 'Comprar' : 'Consultar'}
            </SmartButton>
          </Stack>
        )
      })}
    </SimpleGrid>
  )
}
