
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Image } from "@chakra-ui/react";

const imageArray = [
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/web-2_1000x.png?v=1668495229",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Banner-WU-Desktop_1_1600x.jpg?v=1668495405",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Saving-web_1_1_1600x.png?v=1667369063",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Banner_2000x650_1_1600x.png?v=1667364749"

]


const Crousel = () => {
  return (
    <Box w='90%' m='auto' mt='12'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        {imageArray.map((elem, index)=>{
            return (
                <SwiperSlide key={index}>
                    <Image w='100%' src={elem}/>
                </SwiperSlide>
            )

        })}
        
      
      </Swiper>
    </Box>
  )
}

export default Crousel
