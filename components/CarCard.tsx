'use state'
import Image from 'next/image'
import{ useState } from 'react'
import { CarProps } from '@/types'
import { CustomButton } from '.'
import { modal } from '@nextui-org/react'
import { calculateCarRent } from '@/utils'
type CarsCardProps={
  car:CarProps
}
const CarCard = ({car}:CarsCardProps) => {
  const {city_mpg,year,make,model,transmission,drive}
   = car

   const CarRent = calculateCarRent(city_mpg,year)
  return (
    <div className="car-card group">
      <div className="car_card__content">
        <h2 className='car-card__content-title'>
        {make} {model}
        </h2>
      </div>
      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px]'>
        $
        </span>
      {CarRent}
        <span className='self-end text-[14px]'>
     /day
        </span>
      </p>
    </div>
  )
}

export default CarCard