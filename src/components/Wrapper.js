import { Box } from "@chakra-ui/react";

const Wrapper = ({ children }) => {
  return (
    <Box pl={[5, 8, 50]} pr={[5, 8, 50]}>
      {children}
    </Box>
  );
};

export default Wrapper;
