import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/chakra.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="30px" borderRadius="20" ml={2} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
