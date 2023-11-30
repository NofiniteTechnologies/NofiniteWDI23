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
import { Login } from "../Login/LoginSignup";

export const Register = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

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
                <Text mx="1">Register</Text>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                size="lg"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader color="brand.primary">Register</DrawerHeader>

                    <DrawerBody>
                        
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};
