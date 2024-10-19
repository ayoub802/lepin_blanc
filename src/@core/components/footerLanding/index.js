import React from 'react'

const index = () => {
  return (
    <div className='bg-white relative z-10 font-poppins w-full py-10 md:px-14 px-2 flex flex-col md:flex-row md:justify-between justify-center gap-4 items-center'>
      <div>
        <p className='text-[15px] font-normal text-[#3E3E59]'>© 2024 Le lapin Blanc</p>
      </div>
      <div className='flex items-center gap-9 flex-row'>
        <h3 className='md:text-[16px] text-[14px] whitespace-nowrap text-mainColor font-medium'>
          Politique de confidentialité
        </h3>
        <h3 className='md:text-[16px] text-[14px] whitespace-nowrap text-mainColor font-medium'>
          Confitions générales
        </h3>
      </div>
    </div>
  )
}

export default index
