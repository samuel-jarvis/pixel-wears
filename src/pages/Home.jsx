import React from 'react'
import Categories from '../Container/Categories/Categories'
import Hero from '../Container/Hero/Hero'
import Lastest from '../Container/Latest/Lastest'
import TopSelling from '../Container/TopSelling/TopSelling'


const Home = () => {
  return (
    <div>
      <Hero />
      <TopSelling />
      <Categories />
      <Lastest />
    </div>
  )
}

export default Home