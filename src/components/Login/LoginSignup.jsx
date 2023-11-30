'use client'

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
  Card,
  CardBody,
  Center,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Register } from "../Register";
import { Login } from "../Login";
// import { executeQuery } from "../../api/config/db";


// const Temp = async() =>{
//   const result = await executeQuery("SELECT * FROM user",[]);
//   return result;
// };


export const LoginSignup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const result = await Temp();
  const [login, setLogin] = useState(true);

  const [user, setUser] = useState('');
  const fetchUsers = async () => {
    try {
      const response = await fetch('/api');
      const userData = await response.json();
      setUser(userData);
      console.log(data);
    } catch (error) {
      console.error(error);
    }

  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Button
        onClick={onOpen}
        variant="ghost"
        color="brand.primary"
        _hover={{
          bgColor: "transparent",
        }}
        pos="relative"
      >
        <FaRegUserCircle /> <Text mx="1">Login/SignUp</Text>
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            {login?<Login setLoginFunc={ (val) => setLogin(val)}/>:<Register setLoginFunc={ (val) => setLogin(val)}/> }
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
