import { Flex, Text } from "@chakra-ui/react";

interface AlternativeProps {
  alternative: number;
}

const Alternative = ({ alternative }: AlternativeProps) => {
  return (
    <Flex
      bg={"green.100"}
      justifyContent={"center"}
      alignItems={"center"}
      p={1}
      mb={3}
      mx={4}
      textTransform={"uppercase"}
      fontSize={"xs"}
      borderRadius={"md"}
    >
      <Text>{`Cash Alternative: $${alternative}`}</Text>
    </Flex>
  );
};

export default Alternative;
