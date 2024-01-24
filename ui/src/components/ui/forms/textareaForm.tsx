import { Flex, FormLabel, Textarea } from "@chakra-ui/react";
import { useField, FieldProps } from "@formiz/core";
import { Text } from "@chakra-ui/react";

type MyFieldProps<FormattedValue> = FieldProps<string, FormattedValue>;

interface InputFieldProps {
  hasLeftEl?: boolean;
  leftEl?: any;
  hasRightEl?: boolean;
  rightEl?: any;
  type?: string;
  name: string;
}

const TextareaForm = <FormattedValue = string,>(
  props: MyFieldProps<FormattedValue> | InputFieldProps | any
) => {
  const { value, setValue, isValid, errorMessage } = useField(props);
  const { name } = props;
  return (
    <Flex flexDir="column">
      <FormLabel fontSize={"sm"} color={"white"} textTransform={"capitalize"}>
        {name}
      </FormLabel>
      <Textarea
        color={"white"}
        bg={"gray.900"}
        name={name}
        value={value ?? ""}
        onChange={(e) => setValue(e.target.value)}
        borderColor={isValid ? "" : "red.500"}
        minH={"300px"}
        h={"100%"}
        resize={"none"}
      />
      {!isValid && (
        <Text fontSize={"xs"} color={"red.500"}>
          {errorMessage}
        </Text>
      )}
    </Flex>
  );
};

export default TextareaForm;
