import { SimpleGrid, Stack, Text, Title } from '@mantine/core'
import { PhotoFrame } from '@/components/ui/PhotoFrame'
import { Reveal } from '@/components/ui/Reveal'
import { SmartButton } from '@/components/ui/SmartButton'
import type { Product } from '@/content/products'

const shapes = ['arch', 'rect', 'pill'] as const

/** Productos con foto en forma de arco, rectángulo o cápsula, alternados. */
export function ProductList({ items, buttonColor }: { items: Product[]; buttonColor: string }) {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={48} mt={48}>
      {items.map((p, i) => {
        const href = p.checkoutUrl || `/contacto?asunto=${p.id}`
        return (
          <Reveal key={p.id} effect="up" delay={i * 120}>
            <Stack component="article" gap="sm" align="flex-start">
              {p.image && (
                <PhotoFrame
                  photo={{ src: p.image, alt: p.title }}
                  shape={shapes[i % shapes.length]}
                  ratio={3 / 4}
                  style={{ maxWidth: 280 }}
                />
              )}
              {p.label && (
                <Text size="sm" fw={700} style={{ letterSpacing: '0.08em' }}>
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
          </Reveal>
        )
      })}
    </SimpleGrid>
  )
}
