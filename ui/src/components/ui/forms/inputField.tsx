import {
  Flex,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import { useField, FieldProps } from "@formiz/core";
import { Text } from "@chakra-ui/react";

type MyFieldProps<FormattedValue> = FieldProps<string, FormattedValue>;

interface InputFieldProps {
  leftEl?: any;
  rightEl?: any;
  type?: string;
  label?: string;
  name: string;
}

const InputField = <FormattedValue = string,>(
  props: MyFieldProps<FormattedValue> | InputFieldProps | any
) => {
  const { value, setValue, isValid, errorMessage } = useField(props);
  const { leftEl, rightEl, name, type, label } = props;
  return (
    <Flex flexDir={"column"}>
      <FormLabel fontSize={"sm"} color={"white"} textTransform={"capitalize"}>
        {label ? label : name}
      </FormLabel>
      <InputGroup>
        {leftEl && (
          <InputLeftAddon
            pointerEvents={"none"}
            color={"green.400"}
            bg={"transparent"}
          >
            {leftEl}
          </InputLeftAddon>
        )}
        <Input
          color={"white"}
          bg={"gray.900"}
          name={name}
          type={type}
          value={value ?? ""}
          onChange={(e) => setValue(e.target.value)}
          borderColor={isValid ? "" : "red.500"}
        />
        {!isValid && (
          <Text fontSize={"xs"} color={"red.500"}>
            {errorMessage}
          </Text>
        )}
        {rightEl && (
          <InputRightAddon pointerEvents={"none"} color={"green.400"}>
            {rightEl}
          </InputRightAddon>
        )}
      </InputGroup>
    </Flex>
  );
};

export default InputField;
