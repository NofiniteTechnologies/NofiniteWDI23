import React from 'react'

import {
    Box,
    Button,
    Text,
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


export const Register = ({setLoginFunc}) => {
    return (
        <Box>
            <Center>
                <Stack spacing="4">
                    <VStack as="header" spacing="6" mt="8">
                        <Heading
                            as="h1"
                            fontWeight="300"
                            fontSize="24px"
                            letterSpacing="-0.5px"
                        >
                            Register in to NOFINITE
                        </Heading>
                    </VStack>
                    <Card
                        bg="#f6f8fa"
                        variant="outline"
                        borderColor="#d8dee4"
                        w="308px"
                    >
                        <CardBody>
                            <form>
                                <Stack spacing="4">
                                    <FormControl>
                                        <FormLabel size="sm">
                                            Full Name
                                        </FormLabel>
                                        <Input
                                            type="text"
                                            bg="white"
                                            borderColor="#d8dee4"
                                            size="sm"
                                            borderRadius="6px"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel size="sm">
                                            Phone no.
                                        </FormLabel>
                                        <Input
                                            type="number"
                                            bg="white"
                                            borderColor="#d8dee4"
                                            size="sm"
                                            borderRadius="6px"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel size="sm">
                                            Username or email address
                                        </FormLabel>
                                        <Input
                                            type="text"
                                            bg="white"
                                            borderColor="#d8dee4"
                                            size="sm"
                                            borderRadius="6px"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <HStack justify="space-between">
                                            <FormLabel size="sm">Create Password</FormLabel>
                                        </HStack>
                                        <Input
                                            type="password"
                                            bg="white"
                                            borderColor="#d8dee4"
                                            size="sm"
                                            borderRadius="6px"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <HStack justify="space-between">
                                            <FormLabel size="sm">Confirm Password</FormLabel>
                                        </HStack>
                                        <Input
                                            type="password"
                                            bg="white"
                                            borderColor="#d8dee4"
                                            size="sm"
                                            borderRadius="6px"
                                        />
                                    </FormControl>

                                    <Button
                                        bg="#2da44e"
                                        color="white"
                                        size="sm"
                                        _hover={{ bg: "#2c974b" }}
                                        _active={{ bg: "#298e46" }}
                                    >
                                        Register
                                    </Button>
                                </Stack>
                            </form>
                        </CardBody>
                    </Card>

                    <Card variant="outline" borderColor="#d0d7de">
                        <CardBody>
                            <Center>
                                <HStack fontSize="sm" spacing="1">
                                    <Text>Already have an Accoun?</Text>
                                    <button onClick={() => setLoginFunc(true)}>
                                        Login
                                    </button>
                                </HStack>
                            </Center>
                        </CardBody>
                    </Card>
                </Stack>
            </Center>
            <Center as="footer" mt="16">
                <HStack spacing="4" pt="2">
                    <Link isExternal color="#0969da" href="#" fontSize="xs">
                        Terms
                    </Link>
                    <Link isExternal color="#0969da" href="#" fontSize="xs">
                        Privacy
                    </Link>
                    <Link isExternal color="#0969da" href="#" fontSize="xs">
                        Security
                    </Link>
                    <Link isExternal href="#" fontSize="xs">
                        Contact GitHub
                    </Link>
                </HStack>
            </Center>
        </Box>
    )
}
