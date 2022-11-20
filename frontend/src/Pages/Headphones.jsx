import { Box, Select, Text, Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";
import { getData } from "../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";

const Headphones = () => {
  const [itemBox, setItemBox] = useState(false);

  const dispatch = useDispatch();
  const headPhonesData = useSelector((store) => store.AppReducer.data);
  const isLoading = useSelector((store) => store.AppReducer.isLoading);

  useEffect(() => {
    dispatch(getData("http://localhost:8080/headphones"));
  }, []);
  console.log(headPhonesData, isLoading);
  return (
    <Box>
      <Navbar />

      <Box
        w="90%"
        display="flex"
        p="8"
        alignItems="center"
        justifyContent="space-between"
        m="auto"
        mt="8"
        flexWrap="wrap"
      >
        <Box
          w={{ base: "100%", md: "40%" }}
          display="flex"
          alignItems="center"
          color="white"
          fontSize="xl"
          fontStyle="italic"
          fontFamily="cursive"
        >
          <Text mr="4"> Filter By : </Text>
          <Select w="50%" bg="white" color="black" placeholder="Type">
            <option value=""></option>
            <option value=""></option>
          </Select>
        </Box>
        <Box
          w={{ base: "100%", md: "40%" }}
          mt={{ base: "8", md: "0" }}
          display="flex"
          alignItems="center"
          color="white"
          fontSize="xl"
          fontStyle="italic"
          fontFamily="cursive"
        >
          <Text mr="4"> Sort By : </Text>
          <Select w="50%" bg="white" color="black" placeholder="Price">
            <option value=""></option>
            <option value=""></option>
          </Select>
        </Box>
      </Box>

      <Box w="90%" m="auto" display="flex" justifyContent="center">
        <Input bg="white" w="50%" mr="5" placeholder="Search By Name" />
        <Button bg="red" color="white">
          Search
        </Button>
      </Box>

      {itemBox && (
        <Box
          bg="white"
          h="300px"
          w={{ base: "70%", md: "50%" }}
          m="auto"
          position="relative"
          zIndex="1"
          mt="1"
          rounded="xl"
          overflowY="scroll"
        ></Box>
      )}

      <Box
        w="90%"
        display="grid"
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap="8"
        m="auto"
        mt="16"
      >
        {headPhonesData.map((elem, index) => (
          <ProductCard key={index} {...elem} />
        ))}
      </Box>
      <Footer />
    </Box>
  );
};

export default Headphones;
