import React, {useState} from 'react'
import { Box, Image, Text, Button, Input } from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from 'react-redux';

const CartItem = (elem) => {
    const [Quantity, setQuantity] = useState(elem.Quantity);
    const [Price, setPrice] = useState(elem.Price);
    const token = useSelector((store)=> store.AuthReducer.token);

    const handleDelete = (payload) => {
       
        const id = elem._id;
      
        axios.delete(`http://localhost:8080/cart/delete/${id}`, {
            headers:{
                "token": "Bearer " + token,
                "Content-type":'application/json'
              },
        })
        .then((res)=> console.log("Quantity Deleted"))
        .catch((err)=> console.log(err))
    }

  return (
    <Box
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    bg="white"
    p="4"
    boxShadow="xl"
    rounded="xl"
    mb="4"
  >
    <Box w="30%">
      <Image src={elem.Picture} />
    </Box>
    <Box w="30%" display="flex" flexDirection="column">
      <Text
        fontSize={{ base: "sm", md: "lg", lg: "xl" }}
        fontWeight="700"
        fontStyle="italic"
        fontFamily="cursive"
      >
        {" "}
        {elem.Title}
      </Text>
      <Text
        fontSize={{ base: "sm", md: "lg", lg: "xl" }}
        fontStyle="italic"
        fontFamily="cursive"
      >
        Price: ₹{elem.Price}
      </Text>
      <Button
        fontSize={{ base: "sm", md: "lg", lg: "xl" }}
        bg="red"
        color="white"
        mt="4"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </Box>
    <Box display="flex" alignItems="center">
      <Button
        fontSize="xl"
        mr={{ base: "1", lg: "4" }}
        bg="red"
        color="white"
        // onClick={handleQuantity(-1)}
        disabled={Quantity===1}
      >
        -
      </Button>
      <Text fontSize="xl" mr={{ base: "1", lg: "4" }}>
        {elem.Quantity}
      </Text>
      <Button
        fontSize="xl"
        mr={{ base: "1", lg: "4" }}
        bg="red"
        color="white"
        // onClick={handleQuantity(1)}
      >
        +
      </Button>
      {/* <Text fontSize='xl'>Quantity</Text> */}
    </Box>
  </Box>
  )
}

export default CartItem
