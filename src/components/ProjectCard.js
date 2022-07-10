import { Box, Image, Text } from "@chakra-ui/react";

const ProjectCard = ({ name, image, description, stackTree }) => {
  return (
    <Box
      display={"flex"}
      alignItems="center"
      flexDirection={["column", "row"]}
      pt={[8]}
    >
      <Image boxSize={[80]} borderRadius={15} src={image} />
      <Box w="100%" pt={[3]} pb={3}>
        <Text fontSize={[18]} fontWeight={700}>
          {name}
        </Text>
        <Text fontSize={[16]}>{description}</Text>
        <Text color={"#929292"} fontSize={[14]}>
          {stackTree}
        </Text>
      </Box>
    </Box>
  );
};
export default ProjectCard;
