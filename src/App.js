
import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Welcome from './components/Welcome'
import Categories from './components/Categories'
import PricingBanner from './components/PricingBanner'
import Reviews from './components/Reviews'
import Footerbottom from './components/Footerbottom'
import { Box, Image } from '@chakra-ui/react'


const App = () => {
  return (
    <div>
      <Box position="absolute" left="0" top="0" right="0">
        <Header />
        <Banner />
        <Welcome />
        <Categories />
        <PricingBanner />
        <Reviews />
        <Footerbottom />
      </Box>

      {/**Background Image */}
      <Box position="relative" left="0" top="0" bottom="0" right="0" height="100vh" zIndex={"-1"}>
        <Image w="80%" m="auto" objectFit={"cover"} sizes="300" src='' />
      </Box>


    </div>
  )
}

export default App