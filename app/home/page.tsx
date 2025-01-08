import Header from '@/components/home/header'
import Content from '@/components/home/content'
import { getUsers } from '@/lib/test'

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  // await createUser()
  const users = await getUsers()
  console.log('users', users)
  return (
    <div>
      <Header searchParams={searchParams} />
      <Content searchParams={searchParams} />
    </div>
  )
}
