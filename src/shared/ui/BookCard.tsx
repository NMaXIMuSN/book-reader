import { BookSchema } from "../data/mockData"
import Image from 'next/image'

interface BookCardProps { 
  data: BookSchema
}
export const BookCard = ({ data }: BookCardProps) => {
  return (
    <div className="p-4 rounded cursor-pointer w-[232px] flex flex-shrink-0 flex-col bg-[#F9E9DD] shadow-2xl transition-transform hover:scale-[110%]">
      <img
        className="size-[200px] rounded"
        src={data.image}
        alt={'image-' + data.title}
      />
      <div className="mt-4">
        <h3 className="font-bold text-xl">
          {data.title}
        </h3>
        <p className="mt-2 text-xs text-[#888]">
          {data.description}
        </p>
      </div>
    </div>
  )
}