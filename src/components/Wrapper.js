import { Box } from "@chakra-ui/react";

const Wrapper = ({ children, id }) => {
  return (
    <Box id={id} pl={[5, 8, 50]} pr={[5, 8, 50]} pt={["80px", "100px"]}>
      {children}
    </Box>
  );
};

export default Wrapper;
