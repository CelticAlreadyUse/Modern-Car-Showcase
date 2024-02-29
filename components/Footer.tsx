
import Image from "next/image"
import Link from "next/link"
import { footerLinks } from "@/constants"
const Footer = () => {
    
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
        <div className="max-md:flex-col flex-wrap
        justify-between gap-5 sm:px-16 px-6 py-10
        "
        >
            <div className="flex flex-col 
            justify-start items-start gap-6 
            ">
                <Image src={'/logo.svg'} alt="logo"
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
            <div className="footer__links">
          {footerLinks.map((link)=>(
            <div key={link.title}
            className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((items)=>(
              <Link href={items.url} key={items.title}
              className="text-gray-500">
                {items.title}
              </Link>
              ))}
              </div>
          ))}
            </div>
            <div className="flex justify-between items-center flex-wrap mt-10 border-t
            border-gray-100 sm:px-16 px-6 py-10
            ">
              <p>@2024 Rental Mobil.Hak cipta</p>
              <div className="footer__copyright-link">
                <Link href={`/`}
                className="text-gray-500"
                >
                Privacy Policy
                </Link>
                <Link href={`/`}
                className="text-gray-500"
                >
                  Terms of use
                </Link>
              </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer