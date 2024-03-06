import React from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const ProductCard = (elem) => {
  const token = useSelector((store) => store.AuthReducer.token);
  const isLogin = useSelector((store) => store.AuthReducer.isAuth);

  const handleCart = (payload) => {
    if (isLogin) {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/cart/post`, payload, {
          headers: {
            token: "Bearer " + token,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Login First");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      /* boxShadow='2xl' */
      bg="white"
      p="4"
      mb="8"
      borderRadius="xl"
      cursor="pointer"
    >
      <Link to={`/product/${elem._id}`}>
        <Box h="70%" onClick={() => console.log(elem._id)}>
          <Image src={elem.Picture} />
        </Box>

        <Text fontSize="md" textAlign="left" fontWeight="700">
          {elem.Title}
        </Text>
        <Box
          display="flex"
          w="100%"
          justifyContent="space-between"
          borderBottom="1px solid gray"
          mt="2"
        >
          <Text color="green" fontSize="md">
            {elem.Discount}% OFF
          </Text>
          <Text color={"gray"} textDecoration="line-through" fontSize="md">
            {" "}
            ₹{elem.StrikeOffPrice}
          </Text>
          <Text fontSize="md" fontWeight="700">
            {" "}
            ₹ {elem.Price}
          </Text>
        </Box>

        <Text fontSize="md" textAlign="left" color="gray.600" mt="3">
          You Save: ₹{elem.Saving} ({elem.Discount}%)
        </Text>
      </Link>

      <Button
        w="100%"
        bg="rgb(247,194,10)"
        h="40px"
        mt="4"
        _hover={{ bg: "red", color: "white" }}
        onClick={() => handleCart(elem)}
      >
        ADD TO CART
      </Button>
    </Box>
  );
};

export default ProductCard;
