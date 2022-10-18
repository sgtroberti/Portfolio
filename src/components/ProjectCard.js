import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

const ProjectCard = ({ name, image, description, stackTree, id }) => {
  return (
    <Flex
      flexDirection={["column", "row"]}
      alignItems={"center"}
      w={["100%", "48%"]}
      gap={[1, 5]}
    >
      <Image boxSize={[80, "450px"]} borderRadius={15} src={image} />
      <Box w={"100%"}>
        <Text fontSize={[18]} fontWeight={700}>
          {name}
        </Text>
        <Text fontSize={[16]}>{description}</Text>
        <Link href={`./detail/${id}`}>
          <em>Clique aqui e Saiba mais</em>
        </Link>
        <Text color={"#929292"} fontSize={[14]}>
          {stackTree}
        </Text>
      </Box>
    </Flex>
  );
};
export default ProjectCard;
