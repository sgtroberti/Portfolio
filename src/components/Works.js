import { Flex, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import Wrapper from "./Wrapper";
import { Projects } from "../content/Projects";

const Works = () => {
  return (
    <Wrapper>
      <Text pt={[5, 12]} fontSize={[24, 40]}>
        Alguns <strong>projetos</strong> implementados:
      </Text>
      <Flex
        flexDirection={["column", "row"]}
        flexWrap={"wrap"}
        gap={[5, 12]}
        pt={[5, "20px"]}
        justifyContent={"space-evenly"}
      >
        {Projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              id={project.id}
              image={project.image}
              name={project.name}
              description={project.description}
              stackTree={project.stackTree}
            />
          );
        })}
      </Flex>
    </Wrapper>
  );
};

export default Works;
