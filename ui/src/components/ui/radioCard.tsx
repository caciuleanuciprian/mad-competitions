import {
  useRadio,
  useRadioGroup,
  HStack,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";

function RadioCard(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" w={"100%"} textAlign={"center"}>
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        _checked={{
          bg: "green.600",
          color: "white",
          borderColor: "green.600",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

interface QuestionRadioProps {
  options: string[];
  name: string;
  onChange: (value?: string) => void;
}

function QuestionRadio({ options, name, onChange }: QuestionRadioProps) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: name,
    onChange: onChange,
  });

  const group = getRootProps();

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <HStack
      {...group}
      justifyContent={"space-between"}
      flexDir={isMobile ? "column" : "row"}
    >
      {options.map((value: any) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}

export default QuestionRadio;
