import { Flex, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import { Projects } from "../content/Projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const productDetail = Projects.filter(
    (project) => project.id === Number(id)
  )[0];

  if (!productDetail) {
    return (
      <>
        <Navbar />
        <Wrapper>
          <Text textAlign={"center"} fontSize={[16, 32]}>
            Não há projeto com este ID
          </Text>
        </Wrapper>
      </>
    );
  }

  return (
    <>
      <Navbar notHome />
      <Wrapper>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={["28px", "48px"]} fontWeight={700}>
            {productDetail.name}
          </Text>
          <Text fontSize={["16px", "24px"]} color={"#929292"}>
            {productDetail.stackTree}
          </Text>
          <Text w={["100%", "50%"]}>{productDetail.longDescription}</Text>
          <Text w={["100%", "50%"]}>{productDetail.date}</Text>
          <Image src={productDetail.image} />
        </Flex>
      </Wrapper>
      <Contact />
    </>
  );
};

export default ProjectDetail;
