'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createUser } from '@/lib/test'
import { use } from 'react'

export default function Header({
  searchParams,
}: {
  searchParams: Promise<{
    tab?: string
  }>
}) {
  const { tab } = use(searchParams)
  return (
    <div>
      <div className="flex justify-between px-5 py-3">
        <div className="flex items-center">
          <div className="w-16 h-16 mr-3 bg-slate-600 rounded-full"></div>
          <div className="font-medium text-[20px]">组件仓</div>
        </div>

        <div
          className="flex items-center"
          onClick={() =>
            createUser({
              email: '501mosthandsome@gmail.com',
              name: 'AFanLucky',
              password: '123456',
            })
          }
        >
          <div className="w-12 h-12 mr-3 bg-black rounded-full"></div>
          <div className="text-stone-700 text-[14px]">AFanLucky</div>
        </div>
      </div>

      {/* 搜索框 */}
      <div className="flex items-center h-40 bg-gradient-to-r from-[#00c4cc] to-[#7d2ae8] justify-center">
        <div className="flex w-[500px]">
          <Input placeholder="Resources Index" className="h-10 mr-2" />
          <Button type="submit" size={'lg'}>
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}
