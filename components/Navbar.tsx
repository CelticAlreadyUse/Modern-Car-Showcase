
import Image from "next/image"
import Link from "next/link"

import  CustomButton from "./CustomButton"
const Navbar = () => {
  return (
 <header className="w-full absolute z-10">
    <nav className="max-w-[1440px] mx-auto
    flex justify-between items-center sm:p-16 px-6 py-4">
         <Link href={"/"} className="flex justify-center items-center">
            <Image 
            src={'/logo.svg'}
            alt="rental mobil logo"
            width={118}
            height={18}
            className="object-contain"
            >
            </Image>
         </Link>
         <CustomButton 
            title="sign in"
            btnType="button"
             containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
            ></CustomButton>
    </nav>
 </header>
    )
}

export default Navbar