import { Link } from "react-router-dom";
import { Divider, Flex, Text } from "@chakra-ui/react";
import { NavLinkProps } from "../utils/types";

const NavLink = ({
  to,
  label,
  hasBorderRight,
  isActive,
  onClick,
}: NavLinkProps) => {
  return (
    <Flex
      width={"100%"}
      height={"8vh"}
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
        {hasBorderRight && <Divider orientation="vertical" h={"75%"} />}
      </Link>
    </Flex>
  );
};

export default NavLink;
