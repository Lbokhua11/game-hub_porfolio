import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/chakra.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="30px" borderRadius="20" ml={2} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
