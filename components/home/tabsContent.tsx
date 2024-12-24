import Image from 'next/image'
import { GlobeAltIcon, UserIcon } from '@heroicons/react/24/solid'

export default function TabsContentContainer() {
  const mockData = [
    {
      id: 1,
      name: '组件1',
      title: '这是一个组件1',
      date: '2024-01-01',
      img: 'https://hzwimspic-1251601690.image.myqcloud.com/10001/bb791e70-3698-11ee-9143-49e3eb23069a_size_1196x772?imageMogr2/quality/90/format/jpg/thumbnail/269x206',
      author: '作者1',
    },
    {
      id: 2,
      name: '组件2',
      title: '这是一个组件2',
      date: '2024-10-20',
      img: 'https://hzwimspic-1251601690.image.myqcloud.com/10001/bb791e70-3698-11ee-9143-49e3eb23069a_size_1196x772?imageMogr2/quality/90/format/jpg/thumbnail/269x206',
      author: '作者2',
    },
    {
      id: 3,
      name: '组件3',
      title: '这是一个组件3',
      date: '2024-10-17',
      img: 'https://hzwimspic-1251601690.image.myqcloud.com/10001/bb791e70-3698-11ee-9143-49e3eb23069a_size_1196x772?imageMogr2/quality/90/format/jpg/thumbnail/269x206',
      author: '作者3',
    },
    {
      id: 4,
      name: '组件4',
      title: '���是一个组件4',
      date: '2024-10-18',
      img: 'https://hzwimspic-1251601690.image.myqcloud.com/10001/bb791e70-3698-11ee-9143-49e3eb23069a_size_1196x772?imageMogr2/quality/90/format/jpg/thumbnail/269x206',
      author: '作者4',
    },
    {
      id: 5,
      name: '组件5',
      title: '这是一个组件5',
      date: '2024-10-19',
      img: 'https://hzwimspic-1251601690.image.myqcloud.com/10001/bb791e70-3698-11ee-9143-49e3eb23069a_size_1196x772?imageMogr2/quality/90/format/jpg/thumbnail/269x206',
      author: '作者5',
    },
    {
      id: 6,
      name: '组件6',
      title: '这是一个组件6',
      date: '2024-10-20',
      img: 'https://hzwimspic-1251601690.image.myqcloud.com/10001/bb791e70-3698-11ee-9143-49e3eb23069a_size_1196x772?imageMogr2/quality/90/format/jpg/thumbnail/269x206',
      author: '作者6',
    },
    {
      id: 7,
      name: '组件7',
      title: '这是一个组件7',
      date: '2024-10-20',
      img: 'https://hzwimspic-1251601690.image.myqcloud.com/10001/bb791e70-3698-11ee-9143-49e3eb23069a_size_1196x772?imageMogr2/quality/90/format/jpg/thumbnail/269x206',
      author: '作者7',
    },
    {
      id: 8,
      name: '组件8',
      title: '这是一个组件8',
      date: '2024-10-20',
      img: 'https://hzwimspic-1251601690.image.myqcloud.com/10001/bb791e70-3698-11ee-9143-49e3eb23069a_size_1196x772?imageMogr2/quality/90/format/jpg/thumbnail/269x206',
      author: '作者8',
    },
  ]
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(285px,1fr))] gap-y-10 gap-x-8 w-full mt-7">
      {mockData.map((item) => (
        <div
          key={item.id}
          className="w-[285px] h-[280px] cursor-pointer pt-[7px] px-[8px] pb-[10px] rounded-[10px] box-content bg-white/80 backdrop-blur-sm border border-gray-100/50 shadow-[0_0_1px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:border-gray-200hover:bg-white transition-all duration-300"
        >
          <div className="flex items-center rounded-[6px] overflow-hidden h-[220px] border border-solid border-gray-100 px-1 p-2">
            <Image
              src={item.img}
              alt={item.name}
              width={285}
              height={220}
              className="rounded-[6px] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            />
          </div>
          <div className="flex items-center mt-3">
            <GlobeAltIcon className="size-5 mr-1" />
            <span className="truncate ... text-sm">{item.title}</span>
          </div>
          <div className="flex items-center mt-2">
            <UserIcon className="size-4 mr-1" />
            <span className="truncate ... text-sm">{item.author}</span>
            <span className="text-gray-500 text-sm ml-auto">{item.date}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
