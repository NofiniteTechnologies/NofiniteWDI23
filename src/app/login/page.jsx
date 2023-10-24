"use client";
import {Text}from"@chakra-ui/react";
import Link from "next/link";
import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Heading,
} from '@chakra-ui/react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    // Access email and password values (email and password)
    // Perform login logic here
  }

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box maxW="md" borderWidth="1px" borderRadius="lg" p={6}>
        <Heading as="h2" size="xl" textAlign="center" mb={6}>
          Login
        </Heading>

        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl id="password" isRequired mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <Button
          colorScheme="teal"
          variant="solid"
          width="100%"
          mt={6}
          onClick={handleLogin}
        >
          Log In
        </Button>
        <Text textAlign="center">
      <Link href="/signup" color="teal.500" _hover={{ textDecoration: 'underline' }}>
        Click here
      </Link>
      <Box display="inline" color="gray.500" mx={2}>
        Signup
      </Box>
    </Text>
      </Box>
    </Box>
    
  );
}
export default LoginPage;