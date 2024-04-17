import { BookList } from "../widgets/BookList";
import { Sidebar } from "../widgets/Sidebar/ui/Sidebar";

export default function Home() {
  return (
    <div className="">
      <main className="flex">
        <Sidebar />
        <BookList />
      </main>
    </div>
  );
}
