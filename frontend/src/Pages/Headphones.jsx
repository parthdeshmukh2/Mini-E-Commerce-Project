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

  const [headphones, setHeadphones] = useState([]);

  const [filter, setFilter] = useState("");

  const handleSort = (value) => {
    if (value == "low") {
      console.log(value);
      let sort = [...headphones].sort((a, b) => a.Price - b.Price);
      setHeadphones(sort);
    } else if (value == "high") {
      let sort = [...headphones].sort((a, b) => b.Price - a.Price);
      setHeadphones(sort);
    }
  };

  const handleFilter = (value) => {
    console.log(value);
    if (value === "BLUETOOTH HEADPHONES") {
      const filteredData = [...headphones].filter(
        (elem) => elem.Category === "BLUETOOTH HEADPHONES"
      );
      setHeadphones(filteredData);
    } else if (value === "Wired Headphones") {
      const filteredData = [...headphones].filter(
        (elem) => elem.Category === "Wired Headphones"
      );
      setHeadphones(filteredData);
    }
  };

  useEffect(() => {
    dispatch(getData("https://ecomm-server.onrender.com/headphones"));
  }, []);

  useEffect(() => {
    setHeadphones(headPhonesData);
  }, []);

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
          <Select
            w="50%"
            bg="white"
            color="black"
            placeholder="Type"
            onChange={(e) => handleFilter(e.target.value)}
          >
            <option value="Wired Headphones">Wired</option>
            <option value="BLUETOOTH HEADPHONES">Bluetooth</option>
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
          <Select
            w="50%"
            bg="white"
            color="black"
            placeholder="Price"
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="low">Low To High</option>
            <option value="high">High To Low</option>
          </Select>
        </Box>
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
        {headphones.map((elem, index) => (
          <ProductCard key={index} {...elem} />
        ))}
      </Box>
      <Footer />
    </Box>
  );
};

export default Headphones;
