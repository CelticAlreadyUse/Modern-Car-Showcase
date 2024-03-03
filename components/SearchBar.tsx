'use client'
import {SearchMenuFacturer} from '@/components/index'
import { useState } from 'react'


const SearchBar = () => {
    const [manuFactur,setManuFacture] = useState('')
const handleSearch = () =>{

}   
    return (
    <form className='searchbar'  
    onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchMenuFacturer 
            setManuFacture={setManuFacture}
            manuFacture={manuFactur}/>
        </div>
    </form>
  )
}

export default SearchBar