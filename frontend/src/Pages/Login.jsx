import React, { useState } from "react";
import { Box, Input, Button, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
        <Input placeholder="Enter Email" mb="4" bg="white" />

        <Input placeholder="Enter Password" mb="4" bg="white" />
        <Button w="30%" m="auto" bg="red.500" mb="4" color="white">
          Login
        </Button>

        <Box display="flex" m="auto">
          <Text color="white" textAlign="center">
            Don't have an account?{" "}
          </Text>
          <Text
            color="white"
            textAlign="center"
            ml="2"
            textDecoration="underline"
            cursor="pointer"
            onClick={() => navigate("/signup")}
          >
            {" "}
            Register Here
          </Text>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Login;
