import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Crousel from "../Components/Crousel";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import {useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import {getData} from "../Redux/AppReducer/action";

const HomePage = () => {
const dispatch = useDispatch();
const headphonesData = useSelector((store)=> store.AppReducer.data);

useEffect(()=>{
  dispatch(getData("http://localhost:8080/headphones"))
  

},[])

  return (
    <Box>
      <Navbar />
      <Crousel />

      <Box
        w="90%"
        h="50px"
        m="auto"
        mt="8"
        display="flex"
        alignItems="center"
        p="4"
        justifyContent="space-between"
      >
        <Text
          color="white"
          fontSize="3xl"
          fontWeight="500"
          fontStyle="italic"
          fontFamily="cursive"
        >
          Headphones
        </Text>
        <Text
          color="white"
          fontStyle="italic"
          fontFamily="cursive"
          fontSize="xl"
          textDecoration="underline"
          cursor="pointer"
        >
          View All
        </Text>
      </Box>
      <Slider  data = {headphonesData}/>

      <Box w='90%' m='auto' mt='16'>
        <Image w='100%' h={{base:"250px",md:'450px'}} rounded='xl'  src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/blog_1_600x.webp?v=1663587253' />
      </Box>

      <Box w='90%' m='auto' mt='16'>
        <Image w='100%' h={{base:"250px",md:'450px'}} rounded='xl'  src='https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/blog-banner_600x.png?v=1668778994' />
      </Box>

      <Box w='90%' m='auto' mt='16'>
        <Image w='100%' h={{base:"250px",md:'450px'}} rounded='xl'  src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/blog_3_600x.webp?v=1663587423' />
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
