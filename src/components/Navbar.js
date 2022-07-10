import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box
      height={["70px", "90px"]}
      pl={[5, 8, "80px"]}
      pr={[5, 8, "80px"]}
      position={"sticky"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Text fontSize={[20, 22, 28]} fontWeight={"700"}>
        Roberti's Portfolio
      </Text>
      <HamburgerIcon w={6} h={6} display={["fixed", "none"]} />
      <Box display={["none", "flex"]} gap={[0, 15, 35]} fontWeight={"700"}>
        <a>Início</a>
        <p>Projetos</p>
        <p>Contato</p>
      </Box>
    </Box>
  );
};

export default Navbar;
