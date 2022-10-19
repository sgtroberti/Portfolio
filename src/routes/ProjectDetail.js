import { Flex, Image, Link, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import { Projects } from "../content/Projects";

import ReactPlayer from "react-player";

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
        <Flex
          flexDir={["column", "row"]}
          alignItems={"center"}
          justifyContent={"center"}
          m="auto"
          w="80%"
          gap={2}
        >
          <Flex
            flexDir={"column"}
            gap={2}
            justifyContent={"space-evenly"}
            w="100%"
          >
            <Text fontSize={["28px", "48px"]} fontWeight={700}>
              {productDetail.name}
            </Text>
            <Text fontSize={["16px", "24px"]} color={"#929292"}>
              {productDetail.stackTree}
            </Text>
            <Text w={["100%", "80%"]}>{productDetail.longDescription}</Text>
            <Text w={["100%", "80%"]}>{productDetail.date}</Text>
            {!productDetail?.github ? (
              <Text>Github não disponível</Text>
            ) : (
              <Link href={productDetail.github} target="_blank">
                Ver no Github
              </Link>
            )}
          </Flex>
          {!productDetail?.video ? (
            <Image borderRadius={16} maxH={"600px"} src={productDetail.image} />
          ) : (
            <ReactPlayer
              width={"100%"}
              height={"600px"}
              url={productDetail.video}
            />
          )}
        </Flex>
      </Wrapper>
      <Contact />
    </>
  );
};

export default ProjectDetail;
