import React, { useState } from "react";
import { Box, Input, Button, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const navigate = useNavigate();

    const handleSubmit = () => {
      const body = {
        Name:name,
        Email:email, 
        Password:password,
        LastName:lastName
      }
      axios.post("http://localhost:8080/user/register", body)
      .then((res)=> {
        alert("Registered SuccessFully");
        navigate('/login');
      })
      .catch((err)=> console.log(err));
    }

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
      <Input  type='text' placeholder="Enter Name" mb="4" bg="white" onChange={(e)=> setName(e.target.value)}/>

      <Input type='text' placeholder="Enter Lastname" mb="4" bg="white" onChange={(e)=> setLastName(e.target.value)}/>

      <Input type='email' placeholder="Enter Email" mb="4" bg="white"  onChange={(e)=> setEmail(e.target.value)}/>

      <Input  placeholder="Enter Password" mb="4" bg="white" type='password' onChange={(e)=> setPassword(e.target.value)}/>

      <Button w="30%" m="auto" bg="red.500" mb="4" color="white" onClick={handleSubmit}>
        Register
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
