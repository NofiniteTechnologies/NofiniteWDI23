import { Box } from '@chakra-ui/react';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

export const Navbar = () => {
  return (
    <>
      <Box pos="fixed" w="100%" bgColor="white" zIndex={10} >
        <DesktopNav/>
        <MobileNav/>
      </Box>
    </>
  );
};
