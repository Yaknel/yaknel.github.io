import { Seo } from '@/components/ui/Seo'
import { site } from '@/content/site'
import { PageHeading, WorkWithMeSections } from '@/features/sections'

export default function WorkWithMePage() {
  return (
    <>
      <Seo title={site.workWithMe.title} description={site.workWithMe.lead} />
      <PageHeading id="work-title" title={site.workWithMe.title} lead={site.workWithMe.lead} />
      <WorkWithMeSections />
    </>
  )
}
