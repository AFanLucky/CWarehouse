'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { tabsConfig } from '@/lib/constant'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import TabsContentContainer from './tabsContent'
export default function TabsContainer() {
  const pathname = usePathname()

  const { replace } = useRouter()

  const changeTabs = (value: string) => {
    replace(`${pathname}?tab=${value}`)
  }

  const searchParams = useSearchParams()

  const tab = searchParams.get('tab')

  return (
    <Tabs value={tab || 'All'} onValueChange={(value) => changeTabs(value)}>
      <TabsList>
        {tabsConfig.map((tabsItem: TabsItem) => (
          <TabsTrigger value={tabsItem.name} key={tabsItem.id} className="w-28">
            {tabsItem.name}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value={tab || 'All'}>
        <TabsContentContainer />
      </TabsContent>
    </Tabs>
  )
}
