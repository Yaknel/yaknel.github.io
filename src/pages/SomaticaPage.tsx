import { Seo } from '@/components/ui/Seo'
import { somatica } from '@/content/somatica'
import { SomaticaSections } from '@/features/sections'

/** Landing del taller mensual de escritura somática. */
export default function SomaticaPage() {
  return (
    <>
      <Seo title="Taller de escritura somática" description={somatica.lead} />
      <SomaticaSections />
    </>
  )
}
