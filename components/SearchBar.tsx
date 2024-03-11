'use client'
import {SearchMenuFacturer} from '@/components/index'
import Image from 'next/image'
import { useState } from 'react'
import { SourceTextModule } from 'vm'

const SearchButton = ({otherClass}:{otherClass:string}) =>(
    <button type='submit' className={`-ml-3 z-10 ${otherClass}`}>
        <Image src={'magnifying-glass.svg'}
        alt='magnifying-glass'
        width={40} height={40}
        className='object-contain'/>
    </button>
)

const SearchBar = () => {
    const [manuFactur,setManuFacture] = useState('')
    const [modal,setModal] = useState('')
const handleSearch = () =>{

}   
    return (
    <form className='searchbar'  
    onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchMenuFacturer 
            setManuFacture={setManuFacture}
            manuFacture={manuFactur}/>
        <SearchButton otherClass="sm:hidden"/>
        </div>
        <div className="searchbar__item">
            <Image
            src={'/model-icon.png'}
            width={25} height={25} alt='model-icons'/>
        <input type="text" name="model"
        value={modal} 
        onChange={(e)=>setModal(e.target.value)}
        className="searchbar__input"/>
        <SearchButton otherClass='sm:hidden'/>
        </div>
        <SearchButton otherClass='max-sm:hidden'/>
    </form>
  )
}

export default SearchBar