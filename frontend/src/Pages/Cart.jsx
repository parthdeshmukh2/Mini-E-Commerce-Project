import { Box, Image, Text, Button, Input } from "@chakra-ui/react";
import React , {useState}from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartData } from "../Redux/CartReducer/action";
import CartItem from "../Components/CartItem";

// const cartItem = [
//   {
//     Title: "boAt Rockerz 518",
//     Price: 1299,
//     StrikeOffPrice: 3999,
//     Discount: 67,
//     Saving: 2691,
//     Category: "BLUETOOTH HEADPHONES",
//     Quantity: 1,
//     Title2: "boAt Rockerz 518 Wireless Headphone",
//     Picture:
//       "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-blue_600x.png?v=1613731627",
//   },
//   {
//     Title: "boAt Rockerz 550",
//     Price: 1999,
//     StrikeOffPrice: 4999,
//     Discount: 60,
//     Saving: 3000,
//     Category: "BLUETOOTH HEADPHONES",
//     Quantity: 1,
//     Title2: "Rockerz 550 Over Ear Bluetooth Headphone",
//     Picture:
//       "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_600x.png?v=1625046144",
//   },
//   {
//     Title: "boAt Rockerz 450 Pro",
//     Price: 1999,
//     StrikeOffPrice: 3999,
//     Discount: 50,
//     Saving: 2000,
//     Category: "BLUETOOTH HEADPHONES",
//     Quantity: 1,
//     Title2: "Rockerz 450 Pro Wireless Headphone",
//     Picture:
//       "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img3_600x.png?v=1616562632",
//   },
// ];

const Cart = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const token = useSelector((store)=> store.AuthReducer.token);
  const cartData = useSelector((store)=> store.CartReducer.cartData);
  const [coupon, setCoupon] = useState("");
  const [discounPrice, setDiscounPrice] = useState(0);

  const total = cartData.reduce((sum, elem)=>{
    return sum+(Number(elem.Price))
  }, 0)

  const handleDiscount = () => {
    if(coupon == "Masai30"){
      setDiscounPrice(total*0.3);
      setCoupon("");
     
    }
    else {
      alert("Invalid Coupon");
    }
  }

  useEffect(()=>{
    dispatch(getCartData(token));

  
  },[cartData])


 
  return (
    <Box>
      <Navbar />

      <Box
        w="90%"
        m="auto"
        display="grid"
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        mt="16"
        gap="20"
      >
        <Box>
          {cartData.map((elem, index) => <CartItem key={index} {...elem}/>)}
        </Box>

        <Box>
          <Box
            bg="white"
            mt="8"
            rounded="xl"
            p="4"
            w={{ base: "90%", md: "90%", lg: "70%" }}
            m="auto"
          >
            <Text
              fontSize="2xl"
              fontStyle="italic"
              fontFamily="cursive"
              fontWeight="600"
            >
              Apply Coupon Code
            </Text>
            <Input placeholder="Enter Coupon Code" mt="4" onChange={(e)=> setCoupon(e.target.value)} />
            <Button w="90%" mt="4" bg="red" color="white" onClick={handleDiscount}>
              Apply Coupon
            </Button>
          </Box>

          <Box
            bg="white"
            rounded="xl"
            p="4"
            w={{ base: "90%", md: "90%", lg: "70%" }}
            m="auto"
            mt="8"
          >
            <Text
              fontSize="2xl"
              fontStyle="italic"
              fontFamily="cursive"
              fontWeight="600"
            >
              Cart Details
            </Text>
            <Box display="flex" justifyContent="space-between" mt="4">
              <Text fontSize="xl" fontWeight="500" fontFamily="cursive">
                Total No. Of Items
              </Text>
              <Text fontSize="xl" fontWeight="500" fontFamily="cursive">
                {cartData.length}
              </Text>
            </Box>
            <Box display="flex" justifyContent="space-between" mt="4">
              <Text fontSize="xl" fontWeight="500" fontFamily="cursive">
                Total Price
              </Text>
              <Text fontSize="xl" fontWeight="500" fontFamily="cursive">
              ₹ {total}
              </Text>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              borderBottom="1px solid gray"
              mt="4"
            >
              <Text
                fontSize="xl"
                fontWeight="500"
                fontFamily="cursive"
                color="green"
              >
                Discount Offerd
              </Text>
              <Text
                fontSize="xl"
                fontWeight="500"
                fontFamily="cursive"
                color="green"
              >
                ₹ {discounPrice}
              </Text>
            </Box>
            <Box display="flex" justifyContent="space-between" mt="4">
              <Text
                fontSize="xl"
                fontWeight="700"
                fontFamily="cursive"
                color="red"
              >
                Total{" "}
              </Text>
              <Text
                fontSize="xl"
                fontWeight="700"
                fontFamily="cursive "
                color="red"
              >
               ₹ {total-discounPrice}
              </Text>
            </Box>

            <Button
              w="90%"
              mt="4"
              bg="red"
              color="white"
              onClick={() => navigate("/payments")}
            >
              Place Order
            </Button>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Cart;
