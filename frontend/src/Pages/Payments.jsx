import { Box, Image, Input, Button, Text} from '@chakra-ui/react'
import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Payments = () => {
  return (
    <Box>
      <Navbar/>
      <Box w='90%' m='auto' mt='16'>
        <Image m='auto'  src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Payment_new_91fe0802-f10f-44da-a905-c0d6066f782b_700x.png?v=1666253682' />

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
        <Input placeholder="Enter Name" mb="4" bg="white" w='100%' />

        <Input placeholder="Enter Card Number" mb="4" bg="white"  w='100%' mr='2'/>
        <Input placeholder='Enter Cvv'  bg="white" w='40%' mr='4' />
        <Input placeholder='Enter Expiry'  bg="white" w='50%' />
        <Button w="80%" m="auto" bg="red.500" mb="4" color="white" mt='8'>
          Confirm
        </Button>

        
      </Box>

      <Footer/>
      
    </Box>
  )
}

export default Payments
