import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/chakra.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="30px" borderRadius="20" />
    </HStack>
  );
};

export default NavBar;
