import { Box, Flex, Image, Link } from "@chakra-ui/react";

const Navbar = ({ notHome }) => {
  const generateLinks = () => {
    return (
      <Flex gap={[10, 5]} pt={[8, 0]} fontSize={[16, 20]}>
        {notHome ? (
          <Link href={!notHome ? "#home" : "/"}>Início</Link>
        ) : (
          <>
            <Link href={"#about"}>Sobre</Link>
            <Link href={"#stacks"}>Stacks</Link>
            <Link href={"#projects"}>Projetos</Link>
            <Link href={"#contacts"}>Contato</Link>
          </>
        )}
      </Flex>
    );
  };

  return (
    <Box
      height={["90px"]}
      pl={[5, 8, 50]}
      pr={[5, 8, 50]}
      position={"fixed"}
      w="100%"
      bgColor={"#212121"}
      zIndex={5}
    >
      <Flex
        pt={[4, 5]}
        w="100%"
        alignItems={"center"}
        justifyContent={["center", "space-between"]}
      >
        <Link href="/" fontSize={[24, 40]} fontWeight={"700"}>
          Guilherme - Portfólio
        </Link>

        <Box display={["none", "flex"]} gap={[0, 15, 35]} fontWeight={"700"}>
          {generateLinks()}
        </Box>
      </Flex>
      <Box
        mt={"-20px"}
        display={["flex", "none"]}
        justifyContent="center"
        gap={[0, 15, 35]}
        fontWeight={"700"}
      >
        {generateLinks()}
      </Box>
    </Box>
  );
};

export default Navbar;
