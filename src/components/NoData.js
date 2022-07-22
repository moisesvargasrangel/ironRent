import { Box, Heading } from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";

export default function NoData() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <WarningTwoIcon boxSize={"50px"} color={"teal.300"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Sin resultados nene :-(
      </Heading>
    </Box>
  );
}