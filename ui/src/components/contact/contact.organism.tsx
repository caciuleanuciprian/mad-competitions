import { Flex, useMediaQuery } from "@chakra-ui/react";
import ContactForm from "./molecules/contactForm";
import ContactDetails from "./molecules/contactDetails";

const Contact = () => {
  const [isTablet] = useMediaQuery("(min-width: 768px)", { ssr: false });
  return (
    <Flex
      width={!isTablet ? "90%" : "100%"}
      maxWidth={"900px"}
      margin={"0 auto"}
      h={"100%"}
      minH={"55vh"}
      my={8}
      justifyContent={"center"}
      alignItems={"flex-start"}
      bg={"gray.900"}
      borderRadius={"md"}
      flexDir={!isTablet ? "column" : "row"}
    >
      <ContactForm order={!isTablet ? 2 : 1} />
      <ContactDetails order={!isTablet ? 1 : 2} />
    </Flex>
  );
};

export default Contact;
