import { Box } from "@chakra-ui/react";

const Background = ({ children }) => {
  return (
    <Box color={"white"} bgColor={"#212121"}>
      {children}
    </Box>
  );
};

export default Background;
