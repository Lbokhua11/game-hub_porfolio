import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/chakra.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
    </HStack>
  );
};

export default NavBar;
