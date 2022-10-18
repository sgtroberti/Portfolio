import { Flex, Image, Text } from "@chakra-ui/react";

const ContactButton = ({ contact }) => {
  return (
    <a href={contact.link} target="__blank">
      <Flex alignItems={"center"} flexDir="column" gap={[2, 2]} pb={[6, 10]}>
        <Image w={["60px", "100px"]} src={contact.img} />
        <Text fontSize={[14, 20]}>{contact.media}</Text>
      </Flex>
    </a>
  );
};

export default ContactButton;
