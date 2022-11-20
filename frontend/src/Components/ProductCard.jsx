import React from 'react'
import { Box, Image, Text, Button } from '@chakra-ui/react'

const ProductCard = (elem) => {
  return (
    <Box
    display="flex"
    flexDirection="column"
    /* boxShadow='2xl' */
    bg='white'
    p="4"
    mb="8"
    borderRadius="xl"
    cursor="pointer"
  >
    <Box h="70%">
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
      <Text
        color={"gray"}
        textDecoration="line-through"
        fontSize="md"
      >
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

    <Button
      w="100%"
      bg="rgb(247,194,10)"
      h="40px"
      mt="4"
      _hover={{ bg: "red", color: "white" }}
    >
      ADD TO CART
    </Button>
  </Box>
  )
}

export default ProductCard
