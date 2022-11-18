import React, { useState } from "react";
import { Box, Input, Button, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const navigate = useNavigate();

  return (
    <Box>
    <Navbar />

    <Box
      w={{ base: "90%", md: "60%", lg: "30%" }}
      bg="gray.900"
      m="auto"
      p="16"
      mt="16"
      rounded="xl"
      display="flex"
      flexDir="column"
    >
      <Input placeholder="Enter Name" mb="4" bg="white" onChange={()=> setName()}/>

      <Input placeholder="Enter Lastname" mb="4" bg="white" onChange={()=> setLastName}/>

      <Input placeholder="Enter Email" mb="4" bg="white" type='email' onChange={()=> setEmail}/>

      <Input placeholder="Enter Password" mb="4" bg="white" type='password' onChange={()=> setPassword}/>

      <Button w="30%" m="auto" bg="red.500" mb="4" color="white">
        Login
      </Button>

      <Box display="flex" m="auto">
        <Text color="white" textAlign="center">
          Already have an Acount
        </Text>
        <Text
          color="white"
          textAlign="center"
          ml="2"
          textDecoration="underline"
          cursor="pointer"
          onClick={() => navigate("/login")}
        >
        
          Login Here
        </Text>
      </Box>
    </Box>

    <Footer />
  </Box>
  )
}

export default SignUp
