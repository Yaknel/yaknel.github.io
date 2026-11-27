import { Seo } from '@/components/ui/Seo'
import { site } from '@/content/site'
import { SpeakingSections } from '@/features/sections'

export default function SpeakingPage() {
  return (
    <>
      <Seo title={site.speaking.title} description={site.speaking.lead} />
      <SpeakingSections />
    </>
  )
}
