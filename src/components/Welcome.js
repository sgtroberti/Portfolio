import { Flex, Text } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import Wrapper from "./Wrapper";

const Welcome = () => {
  return (
    <Wrapper>
      <Flex
        h={["calc(100vh - 120px)", "calc(100vh - 250px)"]}
        alignItems={"center"}
        justifyContent={"center"}
        id="home"
      >
        <Text fontSize={[30, 32, 35]} fontWeight={700} textAlign={"center"}>
          Guilherme Roberti, FullStack Developer
        </Text>
      </Flex>
      <Flex
        h={["50px", "60px"]}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <TriangleDownIcon w={6} h={6} />
      </Flex>
    </Wrapper>
  );
};
export default Welcome;
