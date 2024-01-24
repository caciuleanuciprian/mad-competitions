import { Flex } from "@chakra-ui/react";
import { CARD_WIDTH } from "../../competitions/utils/consts";

interface CardProps {
  children: React.ReactNode;
  bg?: string;
  onClick?: () => void;
  centered?: boolean;
}

const Card = ({ children, bg, onClick, centered }: CardProps) => {
  return (
    <Flex
      bg={bg}
      h={"750px"}
      flexDir={"column"}
      borderRadius={"md"}
      boxShadow={"5px 5px 15px 0px rgba(0,0,0,0.5)"}
      transition={"all 0.2s ease-in-out"}
      w={`${CARD_WIDTH}`}
      _hover={{
        cursor: "pointer",
      }}
      justifyContent={centered ? "center" : "space-between"}
      onClick={onClick ? onClick : () => {}}
    >
      {children}
    </Flex>
  );
};

export default Card;
