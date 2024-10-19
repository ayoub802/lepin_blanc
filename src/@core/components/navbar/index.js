import Image from 'next/image'
import React from 'react'
import Logo from '../../../../public/assets/logo.svg'
import Link from 'next/link'

// Navbar Components
const index = ({ link, title }) => {
  return (
    <div className='w-full fixed top-0 left-0 z-20 bg-mainColor px-8 md:px-14 py-4 flex justify-between items-center'>
      <div>
        <Image src={Logo} alt='Logo of Lapin Blanc' width={50} height={50} className='w-full h-full' quality={100} />
      </div>

      <Link href={link}>
        <h3 className='text-[14px] font-poppins font-medium text-white'>{title}</h3>
      </Link>
    </div>
  )
}

export default index
