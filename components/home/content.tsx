import TabsContainer from './tabs'

export default async function Content(props: {
  searchParams?: Promise<{
    query?: string
  }>
}) {
  const searchParams = await props.searchParams

  return (
    <div className="w-full py-8 px-16">
      <TabsContainer />
    </div>
  )
}
