import { books } from "@/src/shared/data/mockData"
import { BookCard } from "@/src/shared/ui/BookCard"
import Link from "next/link"

interface BookListProps {
  className?: string
}

export const BookList = ({ className }: BookListProps) => {
  return (
    <div className="px-10 py-5 rounded-2xl bg-[#f8eadd]">
      <div className="text-2xl mb-6 pl-5 font-bold">
        All Books
      </div>
      <ul className="flex flex-wrap justify-between -mx-4">
        {books.map((book) => (
          <li key={book.id} className="mx-4 mb-4">
            <Link href={`/book/${book.id}`}>
              <BookCard data={book}/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}