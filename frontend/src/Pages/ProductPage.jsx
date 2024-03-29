import { Box, Image, Text, Button } from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import axios from "axios";

const ProductPage = () => {
  const { id } = useParams();
  const [singleProductData, setSingleProductData] = useState({});
  const [quantity, setQuantity] = useState(1);

  const getProductData = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/${id}`)
      .then((res) => setSingleProductData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProductData();
  }, []);
  console.log(singleProductData);

  return (
    <Box>
      <Navbar />

      <Box
        display="grid"
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        w="90%"
        m="auto"
        mt="16"
      >
        <Box>
          <Image src={singleProductData.Picture} />
        </Box>
        <Box p="4">
          <Text
            color="white"
            textAlign="left"
            fontSize="4xl"
            fontFamily="cursive"
            fontStyle="italic"
          >
            {singleProductData.Title}
          </Text>
          <Text color="white" textAlign="left">
            {setSingleProductData.Category}
          </Text>

          <Box display="flex">
            <Text color="green" fontSize="xl">
              ★★★★★
            </Text>
            <Text color="white" fontSize="xl" ml="4">
              4.8 |
            </Text>
            <Text color="white" fontSize="xl" ml="4">
              1064 Reviews
            </Text>
          </Box>

          <Box
            w={{ base: "90%", md: "90%", lg: "60%" }}
            bg="white"
            rounded="xl"
            p="8"
            mt="16"
          >
            <Box display="flex">
              <Text color="red" fontSize="2xl" fontWeight="700">
                ₹{singleProductData.Price}
              </Text>
              <Text
                color="gray"
                fontSize="2xl"
                fontWeight="500"
                textDecoration="line-through"
                ml="4"
              >
                ₹{singleProductData.StrikeOffPrice}
              </Text>
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Text color="green" fontSize="md">
                You Save : ₹{singleProductData.Savings} (
                {singleProductData.Discount}%)
              </Text>
              <Text color="gray">Inclusive of All Taxes</Text>
            </Box>

            <Box display="flex" alignItems="center" mt="8">
              <Button
                fontSize="xl"
                mr="4"
                bg="red"
                color="white"
                disabled={quantity <= 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                -
              </Button>
              <Text fontSize="xl" mr="4">
                {quantity}
              </Text>
              <Button
                fontSize="xl"
                mr="4"
                bg="red"
                color="white"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
              <Text fontSize="xl">Quantity</Text>
            </Box>

            <Button
              w="90%"
              mt="8"
              bg="red"
              color="white"
              _hover={{ bg: "yellow", color: "black" }}
            >
              Add To Cart
            </Button>
          </Box>
        </Box>
      </Box>

      <Box w="90%" p="4" m="auto" mt="16" color="white" textAlign="center">
        <Text fontSize="4xl" fontStyle="italic" fontFamily="cursive">
          {singleProductData.Title2}
        </Text>
        <Text mt="4">
          Say goodbye to noise from the outside world and plug into your musical
          serenity with the best wireless headphones boAt Rockerz 235V2. The
          latest Bluetooth v5.0 in boAt Rockerz 235V2 offers a seamless wireless
          experience while you listen to your sounds. Now you don’t have to wait
          for long while the Bluetooth headphones get charged as it also comes
          with Fast Charging technology. The IPX5 sweat and water resistance
          offers a shield to your headset, whether you sweat it out at the gym
          or get indulged in adrenaline-pumping action. It also offers call
          vibration alert feature to the users. With in-built mic, it supports
          seamless hands-free communication. With a playtime of up to 8 hours,
          remain plugged in to the rhythms of fun, life and energy on your boAt
          Rockerz 235V2.
        </Text>
      </Box>

      <Footer />
    </Box>
  );
};

export default ProductPage;
