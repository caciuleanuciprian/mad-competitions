import { Flex, useMediaQuery } from "@chakra-ui/react";
import ContactForm from "./molecules/contactForm";
import ContactDetails from "./molecules/contactDetails";

const Contact = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)", { ssr: false });
  return (
    <Flex
      width={isMobile ? "90%" : "100%"}
      maxWidth={"900px"}
      margin={"0 auto"}
      h={"100%"}
      minH={"55vh"}
      my={8}
      justifyContent={"center"}
      alignItems={"flex-start"}
      bg={"gray.900"}
      borderRadius={"md"}
      flexDir={isMobile ? "column" : "row"}
    >
      <ContactForm order={isMobile ? 2 : 1} />
      <ContactDetails order={isMobile ? 1 : 2} />
    </Flex>
  );
};

export default Contact;
