'use client'
import {SearchMenuFacturer} from '@/components/index'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
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
    const [model,setModal] = useState('')
    const router = useRouter()
const handleSearch = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()

    if(manuFactur ===''){
        return alert("Masukan sesuatu untuk mulai mencari")
    }

    // Memanggil kembali function update untuk di trigger sebagai pemicu searching feature
    updateSearchParams(model.toLowerCase(),manuFactur.toLowerCase())
}   
    const updateSearchParams = (model:string,manuFactur:string) =>{
        // Mengambil data url pada page sekarang
        const searchparams = new URLSearchParams(window.location.search)

            // Jika memiliki model
        if(model){
            // Menambahkan parameter model yang didapat
            searchparams.set('model',model)
        }else{
            searchparams.delete('model')
        }
        //Jika memiliki manuFcature
        if(manuFactur){
            // Menambahkan parameter manufacture yang didapat
            searchparams.set('manufactur',manuFactur)
        }else{
            searchparams.delete('manufactur')
        }
        //Membuat PathName Baru
        const newPathName = `${window.location.pathname}?${searchparams.toString()}`
        // Mengarahkan user ke pathname baru dari pathname sebagai tujuan searching car
        router.push(newPathName,{scroll:false})
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
        value={model} 
        onChange={(e)=>setModal(e.target.value)}
        placeholder='Tiguanz'
        className="searchbar__input"/>
        <SearchButton otherClass='sm:hidden'/>
        </div>
        <SearchButton otherClass='max-sm:hidden'/>
    </form>
  )
}

export default SearchBar