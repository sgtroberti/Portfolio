import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { ContactLogos } from "../content/Logos";
import ContactButton from "./ContactButton";
import Wrapper from "./Wrapper";

const Contact = () => {
  return (
    <Wrapper>
      <Text py={[5, 16]} fontSize={[26, 40]}>
        Quer entrar em <strong>contato</strong>? Bora um café?
      </Text>

      <Flex justifyContent={"space-around"} alignItems={"center"}>
        {ContactLogos.map((contact) => (
          <ContactButton key={contact.media} contact={contact} />
        ))}
      </Flex>
    </Wrapper>
  );
};

export default Contact;
