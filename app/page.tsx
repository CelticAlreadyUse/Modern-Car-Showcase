
import { Hero,SearchBar,CustomFilters,CarCard } from "@/components";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allCars = await fetchCars()

  const isDataEmpty = !Array.isArray(allCars) || allCars.length<1 || !allCars
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
      <div className="home__filter-container">
        <CustomFilters />
        <CustomFilters />
      </div>
    </div>
    {!isDataEmpty?(
      <section>
        <div className="home__cars-wrapper">
          {allCars?.map((car)=><CarCard car={car}/>)}
        </div>
      </section>
    ): (
      <div className="home__error-container">
        <h2 className="text-black text-xl font-bold">Oops,Sepertinya kita tidak punya hasil</h2>
      </div>
    )}



    </div>
    </main>
  );
}
