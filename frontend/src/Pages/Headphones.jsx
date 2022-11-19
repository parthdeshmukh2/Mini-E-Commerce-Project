import { Box, Select, Text , Input, Button} from "@chakra-ui/react";
import React , {useState}from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Headphones = () => {

    const [itemBox, setItemBox] = useState(true);
   
    
    
  return (
    <Box>
      <Navbar />

      <Box
        w="90%"
        display="flex"
        p="8"
        alignItems="center"
        justifyContent="space-between"
        m="auto"
        mt="8"
        flexWrap="wrap"
      >
        <Box
          w={{ base: "100%", md: "40%" }}
          display="flex"
          alignItems="center"
          color="white"
          fontSize="xl"
          fontStyle="italic"
          fontFamily="cursive"
        >
          <Text mr="4"> Filter By : </Text>
          <Select w="50%" bg="white" color="black" placeholder="Type">
            <option value=""></option>
            <option value=""></option>
          </Select>
        </Box>
        <Box
          w={{ base: "100%", md: "40%" }}
          mt={{ base: "8", md: "0" }}
          display="flex"
          alignItems="center"
          color="white"
          fontSize="xl"
          fontStyle="italic"
          fontFamily="cursive"
        >
          <Text mr="4"> Sort By : </Text>
          <Select w="50%" bg="white" color="black" placeholder="Price">
            <option value=""></option>
            <option value=""></option>
          </Select>
        </Box>
      </Box>

      <Box w='90%' m='auto' display='flex' justifyContent='center'>
        <Input bg='white'  w='50%'  mr='5' placeholder='Search By Name'/>
        <Button bg='red' color='white'>Search</Button>
      </Box>

      {itemBox && 
     <Box bg='white' h='300px' w={{base:'70%',md:'50%'}} m='auto' position='relative' zIndex='1' mt='1' rounded='xl' overflowY='scroll'>
        </Box>
      }
      <Footer />
    </Box>
  );
};

export default Headphones;
