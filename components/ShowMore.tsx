'use client'
import { useRouter } from 'next/navigation'
import { ShowMoreProps } from '@/types'
import { updateSearchParams } from '@/utils'
import { CustomButton } from '.'
const ShowMore = ({PageNumber,isNext}:ShowMoreProps) => {
  const router = useRouter()
  
  const handleNavigation = ()=>{
    const newLimit =(PageNumber+1)*10
  const newPathName = updateSearchParams('limit',`${newLimit}`)
  
    router.push(newPathName,{scroll:false})
}
  return (
    <div className='w-full flex-center gap-5 mt-10'>
    {!isNext && (
      <CustomButton
      title='Show More'
      btnType='button'
      containerStyles='bg-primary-blue rounded-full text-white'
      handleClick={handleNavigation}
      />
    )}
    <div></div>
    </div>
  )
}

export default ShowMore