import { Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import Wrapper from "./Wrapper";

const Works = () => {
  return (
    <Wrapper>
      <Text fontSize={[20, 40]}>
        Alguns <strong>projetos</strong> implementados:
      </Text>
      <ProjectCard
        image={"./assets/img/test.png"}
        name={"QR Code"}
        description={"Sistema de entrada e saída controlado por QR Code"}
        stackTree={"React | Node.js | Prisma | PostgreSql"}
      />
      <ProjectCard
        image={"./assets/img/test.png"}
        name={"Arranchamento"}
        description={"Agendamento de refeições"}
        stackTree={"HTML | CSS | BootStrap | PHP | MySql"}
      />
    </Wrapper>
  );
};

export default Works;
