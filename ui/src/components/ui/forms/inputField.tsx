import {
  FormLabel,
  Input,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
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

export const InputField = <FormattedValue = string,>(
  props: MyFieldProps<FormattedValue> | InputFieldProps | any
) => {
  const { value, setValue, isValid, errorMessage } = useField(props);
  const { hasLeftEl, hasRightEl, leftEl, rightEl, name, type } = props;
  return (
    <>
      {hasLeftEl && (
        <InputLeftElement pointerEvents={"none"} color={"green.400"}>
          {leftEl}
        </InputLeftElement>
      )}
      <FormLabel fontSize={"sm"} color={"white"} textTransform={"capitalize"}>
        {name}
      </FormLabel>
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
      {hasRightEl && (
        <InputRightElement pointerEvents={"none"} color={"green.400"}>
          {rightEl}
        </InputRightElement>
      )}
    </>
  );
};
