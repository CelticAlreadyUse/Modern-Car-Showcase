import { CarProps, FilterProps } from "@/types";

export async function fetchCars({manufactur,year,model,fuel,limit}:FilterProps){
    const headers ={
        'X-RapidAPI-Key': 
        '0a13a4d90dmsha51322bbc349fcdp186e6bjsn42a3bd4ca9b1',
        'X-RapidAPI-Host': 
        'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response  = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufactur}&year=${year}&fuel_type=${fuel}&model=${model}&limit=${limit}`,{
      method:'GET',     
      headers:headers
        }
        )
        const results = await response.json()
        return results;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // perhitunagan rata rata harga rental perhari
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
  
export const GenerateCarImageUrl= (car:CarProps,angle?:string) =>{
        const url = new URL('https://cdn.imagin.studio/getimage')

        const {make,year,model} = car
        url.searchParams.append('customer','hrjavascript-mastery')
        url.searchParams.append('make',make)
        url.searchParams.append('modelFamily',model.split(' ')[0])
        url.searchParams.append('zoomType','fullscreen')
        url.searchParams.append('modelYear',`${year}`)
        url.searchParams.append('angle',`${angle ? angle : ''}`)
       
        return `${url}`;
  }
  export const updateSearchParams = (type: string, value: string) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);
  
    // Set the specified search parameter to the given value
    searchParams.set(type, value);
  
    // Set the specified search parameter to the given value
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };

 