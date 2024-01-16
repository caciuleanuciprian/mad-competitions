import { Link } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";
import { MobileNavLinkProps } from "../utils/types";

const MobileNavLink = ({
  to,
  label,
  isActive,
  onClick,
}: MobileNavLinkProps) => {
  return (
    <Flex
      width={"100%"}
      height={"5vh"}
      justifyItems={"center"}
      alignItems={"center"}
    >
      <Link
        to={to}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={onClick}
      >
        <Text
          fontSize={"md"}
          px={8}
          width={"100%"}
          height={"100%"}
          display={"flex"}
          alignItems={"center"}
          transition={"all .15s ease-in-out"}
          textTransform={"uppercase"}
          color={isActive ? "green.400" : "white"}
          _hover={{ color: "green.400" }}
        >
          {label}
        </Text>
      </Link>
    </Flex>
  );
};

export default MobileNavLink;
