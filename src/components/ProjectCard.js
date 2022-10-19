import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

const ProjectCard = ({ name, image, description, stackTree, id }) => {
  return (
    <Flex
      flexDirection={["column", "row"]}
      alignItems={"center"}
      w={["100%", "48%"]}
      gap={[1, 5]}
    >
      <Image boxSize={[80, "360px"]} borderRadius={15} src={image} />

      <Box w={"100%"}>
        <Text pt={[2, 5]} fontSize={[18, 26]} fontWeight={700}>
          {name}
        </Text>
        <Text pt={[2, 5]} pb={[2, 5]} fontSize={[16, 18]}>
          {description}
        </Text>
        <Link href={`./detail/${id}`} fontSize={[16, 18]}>
          <em>Clique aqui e Saiba mais</em>
        </Link>
        <Text
          pt={[2, 5]}
          fontSize={[16, 22]}
          fontWeight={[800]}
          color={"#929292"}
        >
          {stackTree}
        </Text>
      </Box>
    </Flex>
  );
};
export default ProjectCard;
