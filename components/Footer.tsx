
import Image from "next/image"
import Link from "next/link"
import { footerLinks } from "@/constants"
const Footer = () => {
    
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
        <div className="flex max-md:flex-col flex-wrap
        justify-between gap-5 sm:px-16 px-6 py-10
        "
        >
            <div className="flex flex-col 
            justify-start items-start gap-6 
            ">
                <Image src={'/logo.svg '} alt="logo"
                width={118} height={18}
                className="object-contain"
                >
                </Image>
                    <p className="text-base 
                    text-grey-700
                    ">Rental Mobil <br/>
                    All right reserved
                    </p>
            </div>
            <div className="footer_link">

            </div>
        </div>
    </footer>
  )
}

export default Footer