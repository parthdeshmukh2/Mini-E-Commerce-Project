import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Image, Text, Button } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Styles/styles.css";

import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";


const Slider = ({data}) => {
  return (
    <Box m="auto" mt="8" w="90%">
      <Swiper
        color="black"
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((elem, index) => {
          return (
            <SwiperSlide key={elem._id}>
              <Box
                display="flex"
                flexDirection="column"
                /* boxShadow='2xl' */
                p="4"
                mb="8"
                borderRadius="xl"
                cursor="pointer"
              >
                <Link to={`/product/${elem._id}`}>
               
                <Box h="70%">
                  <Image src={elem.Picture} />
                </Box>

                <Text fontSize="md" textAlign="left" fontWeight="700">
                  {elem.Title}
                </Text>
                <Box
                  display="flex"
                  w="100%"
                  justifyContent="space-between"
                  borderBottom="1px solid gray"
                  mt="2"
                >
                  <Text color="green" fontSize="md">
                    {elem.Discount}% OFF
                  </Text>
                  <Text
                    color={"gray"}
                    textDecoration="line-through"
                    fontSize="md"
                  >
                    {" "}
                    ₹{elem.StrikeOffPrice}
                  </Text>
                  <Text fontSize="md" fontWeight="700">
                    {" "}
                    ₹ {elem.Price}
                  </Text>
                </Box>

                <Text fontSize="md" textAlign="left" color="gray.600" mt="3">
                  You Save: ₹{elem.Saving} ({elem.Discount}%)
                </Text>
                </Link>

                <Button
                  w="100%"
                  bg="rgb(247,194,10)"
                  h="40px"
                  mt="4"
                  mb="-8"
                  _hover={{ bg: "red", color: "white" }}
                >
                  ADD TO CART
                </Button>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Slider;
