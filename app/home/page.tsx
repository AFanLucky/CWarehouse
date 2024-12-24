import Header from '@/components/home/header'
import Content from '@/components/home/content'

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  return (
    <div>
      <Header searchParams={searchParams} />
      <Content searchParams={searchParams} />
    </div>
  )
}
