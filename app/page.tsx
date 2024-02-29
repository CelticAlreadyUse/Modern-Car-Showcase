
import { Hero,SearchBar,CustomFilters } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Hero/>
    <div className="mt-12 padding-x padding-y max-width" id="discover">
    <div className="home__text-container">
      <h1 className="text-4xl font-extrabold">Car Catalog</h1>
      <p>Sewa mobil yang kamu inginkan!</p>
    </div>
    <div className="home__filters">
      <SearchBar/>
      <div className="home_filter-container">
        <CustomFilters />
        <CustomFilters />
      </div>
    </div>
    </div>
    </main>
  );
}
