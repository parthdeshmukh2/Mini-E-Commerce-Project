import { Box, Image, Input, Button, Text } from "@chakra-ui/react";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Payments = () => {
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiry, setExpiry] = useState("");
  const navigate = useNavigate();

  const handlePayment = () => {
    if(name && card && cvv && expiry){
      alert("Payment Successfull");
       navigate('/');
    }
   
  };

  return (
    <Box>
      <Navbar />
      <Box w="90%" m="auto" mt="16">
        <Image
          m="auto"
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Payment_new_91fe0802-f10f-44da-a905-c0d6066f782b_700x.png?v=1666253682"
        />
      </Box>

      <Box
        w={{ base: "90%", md: "60%", lg: "30%" }}
        bg="gray.900"
        m="auto"
        p="16"
        mt="16"
        rounded="xl"
        // display="flex"
      >
        <Input
          placeholder="Enter Name"
          mb="4"
          bg="white"
          w="100%"
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="Enter Card Number"
          mb="4"
          bg="white"
          w="100%"
          mr="2"
          onChange={(e) => setCard(e.target.value)}
        />
        <Input
          placeholder="Enter Cvv"
          bg="white"
          w="40%"
          mr="4"
          onChange={(e) => setCvv(e.target.value)}
        />
        <Input
          placeholder="Enter Expiry"
          bg="white"
          w="50%"
          onChange={(e) => setExpiry(e.target.value)}
        />
        <Button
          w="80%"
          m="auto"
          bg="red.500"
          mb="4"
          color="white"
          mt="8"
          onClick={handlePayment}
        >
          Confirm
        </Button>
      </Box>

      <Footer />
    </Box>
  );
};

export default Payments;
