import { Flex, Text } from "@chakra-ui/react";
import Wrapper from "./Wrapper";

const About = () => {
  return (
    <Wrapper id="about">
      <Flex flexDir={"column"}>
        <Text fontSize={[24, 40]}>
          Sobre <strong>mim</strong>:
        </Text>
        <Flex
          p={[3, 10]}
          gap={(3, 5)}
          justifyContent="space-evenly"
          flexDir={["column", "row"]}
        >
          <Text w={["100%", "45%"]} fontSize={["18px", "24px"]}>
            Iniciei minha carreira com desenvolvimento no fim de 2018, hoje atuo
            como desenvolvedor FullStack utilizando React no Frontend e Nodejs
            no Backend.
            <br />
            <br />
            No início trabalhei principalmente com PHP, sendo o último grande
            trabalho nesta linguagem o projeto de Arranchamento online - Sistema
            para agendamento de refeições para organizações militares que visa
            munir a cozinha com informações para evitar desperdícios na hora da
            confecção da alimentação
          </Text>
          <Text w={["100%", "45%"]} fontSize={["18px", "24px"]}>
            Em meados de 2020 iniciei meus estudos em React/Node.js, stacks que
            permaneço até hoje. Pude aprimorar meus conhecimentos de lá para cá
            tendo trabalhado em vários projetos pequenos e em alguns grandes,
            sendo o principal destaque o controle de acesso via QR-Code para
            Organizações militares, desenvolvido e implementado em 2022.
            <br />
            <br />
            Fique à vontade para entrar em contato comigo através dos canais que
            disponibilizei abaixo, será um prazer conversar!
          </Text>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default About;
