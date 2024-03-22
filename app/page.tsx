
import { Hero,SearchBar,CustomFilters,CarCard, CustomButton,ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars, updateSearchParams } from "@/utils";
import Image from "next/image";
export default async function Home({searchParams}:any) {
  const allCars = await fetchCars({
    manufactur:searchParams.manufactur||'',
    year:searchParams.year ||2022,
    fuel:searchParams.fuel ||'',
    limit:searchParams.limit || 10,
    model:searchParams.model || '',
  })


  const isDataEmpty = !Array.isArray( allCars) ||  allCars.length<1 || !allCars


  return (
    <main className="overflow-hidden">
    <Hero/>
    <div className="mt-12 padding-x padding-y max-width" id="discover">
    <div className="home__text-container">
      <h1 className="text-4xl font-extrabold">Car Catalog</h1>
      <p>Sewa mobil yang kamu inginkan!</p>
    </div>
    <div className="home__filters">
      <SearchBar/>
      <div className="home__filter-container">
        <CustomFilters title='fuel' options={  fuels} />
        <CustomFilters title='year' options={ yearsOfProduction}/>
      </div>
    </div>
    {!isDataEmpty?(
      <section>
        <div className=" home__cars-wrapper">
          {allCars?.map((car)=><CarCard car={car}/>)}
        </div>
           <ShowMore
  PageNumber={(searchParams.limit || 10)/10}
  isNext={(searchParams.limit|| 10)>allCars.length}
    
    />
  
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
