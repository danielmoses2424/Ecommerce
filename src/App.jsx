import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Button from './Shared/Button'
import Category from './Component/Category/Category'
import Category2 from './Component/Category/Category2'
import Services from './Component/Services/Services'
const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar/>
      <Hero />
      <Button />
      <Category />
      <Category2 />
      <Services />
      
    </div>
  )
}

export default App