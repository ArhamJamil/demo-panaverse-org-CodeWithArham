import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


const Navbar = () => {

  function NavHandler() {
    console.log(document.getElementById('nav-list')?.style.margin)
  }



  return (
    <div>
      <>
        <nav className='md:flex md:flex- md:justify-between  bg-gray-900 fixed w-full z-10 top-0  '>
          <div className='flex flex-row justify-around text-center md:block md:flex-none '>
            <Image priority src={'/PanaverseLogo.png'} width={100} height={100} alt="" className='text-justify md:scale-100 md:inline'></Image>
            <span className='text-lg font-semibold text-white shrink flex-none my-8 px-2 '>Panaverse DAO</span>
            <button className=' my-6 px-2  md:hidden  ' onClick={NavHandler}>
              <svg className="w-6 h-6 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button>
          </div>

          <ul id='nav-list' className=' hidden mx-8 my-2 py-4 px-2 bg-slate-700 md:flex md:my-4  md:bg-transparent md:py-3'>
            <li className='md:px-2 md:text-base font-normal text-white hover:text-red-600 md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110 md:duration-300 bg-blue-500 my-2 py-2 px-4 md:bg-transparent md:py-0' ><Link href={"/"}>Home</Link></li>
            <li className='md:px-2 md:text-base font-normal text-white hover:text-red-600 md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110 md:duration-300 hover:bg-slate-600 my-2 py-2 px-4  md:hover:bg-transparent md:py-0'><Link href={"/about"}>About Us</Link></li>
            <li className='md:px-2 md:text-base font-normal text-white hover:text-red-600 md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110 md:duration-300 hover:bg-slate-600 my-2 py-2 px-4 md:hover:bg-transparent md:py-0'><Link href={""}>Apply</Link></li>
            <li className='md:px-2 md:text-base font-normal text-white hover:text-red-600 md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110 md:duration-300 hover:bg-slate-600 my-2 py-2 px-4 md:hover:bg-transparent md:py-0'><Link href={""}>Contact</Link></li>
            <li className='md:px-2 md:text-base font-normal text-white hover:text-red-600 md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110 md:duration-300 hover:bg-slate-600 my-2 py-2 px-4 md:hover:bg-transparent md:py-0'><Link href={""}>Available Programs</Link></li>

          </ul>

        </nav>
      </>
    </div>
  )
}

export default Navbar
