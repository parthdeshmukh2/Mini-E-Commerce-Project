import { Box, Select, Text , Input, Button} from "@chakra-ui/react";
import React , {useState}from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";


const headphones = [
  {
    Title: "boAt Rockerz 518",
    Price: 1299,
    StrikeOffPrice: 3999,
    Discount: 67,
    Saving: 2691,
    Category: "BLUETOOTH HEADPHONES",
    Quantity: 1,
    Title2: "boAt Rockerz 518 Wireless Headphone",
    Picture:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-blue_600x.png?v=1613731627",
  },
  {
    Title: "boAt Rockerz 550",
    Price: 1999,
    StrikeOffPrice: 4999,
    Discount: 60,
    Saving: 3000,
    Category: "BLUETOOTH HEADPHONES",
    Quantity: 1,
    Title2: "Rockerz 550 Over Ear Bluetooth Headphone",
    Picture:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_600x.png?v=1625046144",
  },
  {
    Title: "boAt Rockerz 450 Pro",
    Price: 1999,
    StrikeOffPrice: 3999,
    Discount: 50,
    Saving: 2000,
    Category: "BLUETOOTH HEADPHONES",
    Quantity: 1,
    Title2: "Rockerz 450 Pro Wireless Headphone",
    Picture:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img3_600x.png?v=1616562632",
  },
  {
    Title: "boAt Rockerz 600",
    Price: 2500,
    StrikeOffPrice: 5000,
    Discount: 50,
    Saving: 2500,
    Category: "BLUETOOTH HEADPHONES",
    Quantity: 1,
    Title2: "boAt Rockerz 600 | Bluetooth Headphone",
    Picture:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/fd0e55b0-ca9e-4aa8-b94f-5cca99189951_600x.png?v=1625045647",
  },
  {
    Title: "boAt Nirvanaa 751 ANC ",
    Price: 3999,
    StrikeOffPrice: 7999,
    Discount: 50,
    Saving: 4000,
    Category: "BLUETOOTH HEADPHONES",
    Quantity: 1,
    Title2: "Nirvanaa 751 ANC Wireless Headphone",
    Picture:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_b6563f96-f1a1-4915-b686-d4e37232ec3c_600x.png?v=1644301638",
  },
  {
    Title: "boAt Rockerz 410",
    Price: 1599,
    StrikeOffPrice: 2999,
    Discount: 47,
    Saving: 1391,
    Category: "BLUETOOTH HEADPHONES",
    Quantity: 1,
    Title2: "Rockerz 410",
    Picture:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-410-black_600x.png?v=1613457276",
  },
  {
    Title: "boAt Rockerz 425 ",
    Price: 1499,
    StrikeOffPrice: 2990,
    Discount: 50,
    Saving: 1491,
    Category: "BLUETOOTH HEADPHONES",
    Quantity: 1,
    Title2: "Rockerz 425 Wireless Bluetooth Headphones",
    Picture:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_f1b5ec66-9373-4ca7-b824-0edd129ab085_600x.png?v=1645698329",
  },
  {
    Title: "boAt Immortal 700",
    Price: 2499,
    StrikeOffPrice: 6990,
    Discount: 64,
    Saving: 4491,
    Category: "Wired Headphones",
    Quantity: 1,
    Title2: "Immortal 700 - 7.1 Channel Gaming Headphones",
    Picture:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_65ff249b-c4f8-4dad-ae88-2aae76723ce2_600x.png?v=1643477993",
  },
  {
    Title: "boAt Immortal 200",
    Price: 1999,
    StrikeOffPrice: 4990,
    Discount: 60,
    Saving: 2991,
    Category: "Wired Headphones",
    Quantity: 1,
    Title2: "Immortal 200 - 7.1 Channel Headphones",
    Picture:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-b_600x.png?v=1625748090",
  },
  {
    Title: "boAt Immortal 1000D",
    Price: 2099,
    StrikeOffPrice: 5990,
    Discount: 65,
    Saving: 3891,
    Category: "Wired Headphones",
    Quantity: 1,
    Title2: "Immortal 1000D - 7.1 channel headphones",
    Picture:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_f3aa2756-01f3-4e39-80bc-7b4f6551c7aa_600x.png?v=1625748159",
  },
  {
    Title: "boAt Immortal 1300",
    Price: 2999,
    StrikeOffPrice: 9990,
    Discount: 6991,
    Saving: 70,
    Category: "Wired Headphones",
    Quantity: 1,
    Title2: "Immortal 1300 - Best gaming headphones",
    Picture:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_4_600x.png?v=1632715015",
  },
  {
    Title: "boAt Immortal 300 Headphone",
    Price: 1999,
    StrikeOffPrice: 4990,
    Discount: 60,
    Saving: 2991,
    Category: "Wired Headphones",
    Quantity: 1,
    Title2: "boAt Immortal 300 - Best Gaming Headset for PC & Mobile",
    Picture:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_5b22314d-3d06-41ee-8ff8-6dbc83e27ab1_800x.png?v=1658573936",
  },
  {
    Title: "boAt Immortal 400",
    Price: 1999,
    StrikeOffPrice: 6990,
    Discount: 71,
    Saving: 4991,
    Category: "Wired Headphones",
    Quantity: 1,
    Title2: "Immortal 400 - 7.1 Channel Gaming Headphones",
    Picture:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-700_600x.png?v=1643632678",
  },
  {
    Title: "boAt Rockerz 650 DC",
    Price: 1999,
    StrikeOffPrice: 3990,
    Discount: 50,
    Saving: 1991,
    Category: "Bluetooth Headphones",
    Quantity: 1,
    Title2: "Batman Special Rockerz 650 DC Edition",
    Picture:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1_e669ad28-caff-4fb7-b68a-a345f9e08649_800x.png?v=1658995805",
  },
  {
    Title: "boAt Rockerz 370",
    Price: 899,
    StrikeOffPrice: 2499,
    Discount: 64,
    Saving: 1600,
    Category: "Bluetooth Headphones",
    Quantity: 1,
    Title2: "Rockerz 370",
    Picture:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e5881832-36f8-4c1c-a767-10f2c2a55a02_600x.png?v=1625046573",
  },
];

const Headphones = () => {

    const [itemBox, setItemBox] = useState(false);
   
    
    
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

      <Box w='90%' display='grid' gridTemplateColumns={{base:'repeat(1, 1fr)', md:'repeat(2, 1fr)', lg:'repeat(4, 1fr)'}} gap='8' m='auto' mt='16'>
{headphones.map((elem, index)=>  <ProductCard key={index} {...elem}  />  )}

      </Box>
      <Footer />
    </Box>
  );
};

export default Headphones;
