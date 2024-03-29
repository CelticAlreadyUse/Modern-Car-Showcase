'use client'
import Image from "next/image"
import { CustomButton } from "."
const Hero = () => {
    const handleScroll = () =>{

    }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Temukan,Baca dan Sewa Mobil dengan Cepat!
            </h1>
            <p className="hero__subtitle">
                Persingkat waktu rental mobil mu tanpa ribet.
            </p>
            <CustomButton
            title="Lebih banyak"
            containerStyles="bg-primary-blue text-white 
            rounded-full mt-10
            "
            handleClick={()=>{}}
            />
        </div>
        <div className="hero__image-container">
    <div className="hero__image">
        <div className="hero__image-overlay">
        <Image src='/hero.png' alt="hero" fill className="object-contain "></Image>
        </div>
    </div>
        </div>
    </div>
  )
}

export default Hero
