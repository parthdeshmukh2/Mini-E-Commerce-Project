import React, { useState } from "react";
import { Box, Input, Button, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { userLogin } from "../Redux/AuthReducer/action";
import {useDispatch, useSelector} from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const [isLogin , setIsLogin] = useState("");
  const location= useLocation();
  const lastLocation = location.state?.from?.pathname || '/';
 

  const handleLogin = () => {
   
    if(email && password){
     dispatch(userLogin({Email:email, Password:password}, navigate, lastLocation))
    console.log(isLogin)
    }
 
   
  }
  console.log(location);

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
        <Input placeholder="Enter Email" mb="4" bg="white" type='email' onChange={(e)=> setEmail(e.target.value)} />

        <Input placeholder="Enter Password" mb="4" bg="white" type='password' onChange={(e)=> setPassword(e.target.value)} />
        <Button w="30%" m="auto" bg="red.500" mb="4" color="white" onClick = {handleLogin}>
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
