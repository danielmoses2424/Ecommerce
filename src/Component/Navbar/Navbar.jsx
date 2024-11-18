import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import Darkmood from './Darkmood';

const Navbar = () => {

const menuLink =[
  {
    id: 1,
    name: 'home',
    link: '/#',
    },

    {
    id: 2,
    name: 'shop',
    link: '/#shop',
    },

    {
    id: 3,
    name: 'about',
    link: '/#about',
    },

    {
    id: 4,
    name: 'blog',
    link: '/#blog',
    },
]

const DropdownLinks = [
  {
    id: 1,
    name: 'Trending Product',
    link: '/#',
    },

    {
    id: 2,
    name: 'Best Selling',
    link: '/#',
    },

    {
    id: 3,
    name: 'Top Rated',
    link: '/#',
    },

    {
    id: 4,
    name: 'blog',
    link: '/#',
    },
]
return (
  <div className='bg-white dark:bg-gray-900
    dark:text-white duration-200 relative z-40'>
      <div className='py-4'>
          <div className="container flex justify-between">
              {/* logo and links section */}
              <div className='flex items-center gap-4'>
                  <a href="#"
                  className='text-primary font-semibold
                    tracking-widest 
                    text-2xl uppercase sm:text-3xl'
                  >ESHOP</a>
                  {/* menu items */}
                  <div className='hiden lg:block'>
                    <ul className='flex items-center gap-4'>
                      {
                        menuLink.map((data, index) => (
                          <li key={index}>
                            <a href={data.link}
                            className='inline-block px-4 font-semibold
                            text-gray-500 hover:text-black
                              dark:hover:text-white duration-200' 
                            >
                              {''} 
                            {data.name}</a>
                          </li>
                        ))}
                      
                      {/* Dropdown */}
                      <li className='relative cursor-pointer group'>
                          <a href="#" className='flex items-center gap-[2px]
                          font-semibold text-gray-500
                            dark:hover:text-white py-2'>
                            Quick Links
                            <span>
                              <FaCaretDown className='group-hover:rotate-180 duration-300'/>
                            </span> 
                            </a>
                            {/* Droupdown Link */}
                            <div className='absolute z-[9999] hidden group-hover:block 
                            w-[200px] rounded-md
                             bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white'>
                              <ul className='space-y-2'>
                                
                              { DropdownLinks.map((data, index) =>(
                                    <li key={index}>
                                      <a className='text-gray-500
                                      hover:text-black dark:hover:text-white
                                      duration-200 inline-block w-full p-2
                                       hover:bg-primary/20 rounded-md font-semibold'
                                      href={data.link}
                                      >
                                        {data.name}</a>
                                    </li>
                                  ))
                                }
                              </ul>
                            </div>
                            
                      </li>
                    </ul>
                  </div>
              </div>
              {/* Navbar right section */}
              <div className='flex justify-between items-center gap-4'>
                {/* search bar section */}
                <div className='relative group hidden sm:block'>
                    <input type="text" placeholder='Search'
                    className=' search-bar' />
                    <IoMdSearch  className='text-xl text-gray-600 group-hover:text-primary
                    dark:text-gray-400 absolute top-1/3 -translate-y1/2 right-3 duration-200'/>
                </div>
                {/* order button section */}
                <button className='relative p-3'>
                <FaCartShopping className='text-xl text-gray-600
                  dark:text-gray-400' />
                  <div className='w-4 h-4 bg-red-500 text-white 
                  rounded-full absolute top-0 right-0 flex
                  items-center justify-center text-xs'>

                  </div>
                </button>
                {/* dark mood section*/}
                <div>
                  <Darkmood/>
                </div>
              </div>
          </div>
      </div>
  </div>
)
}

export default Navbar