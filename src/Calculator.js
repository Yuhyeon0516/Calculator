import { View, Text } from "react-native";
import { useState } from "react";
import Button from "./components/Button";
import styled from "styled-components/native";

const ButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;

const InputContainer = styled.View`
  background-color: #4e4c51;
  min-height: 50px;
  justify-content: center;
  align-items: flex-end;
  padding: 10px 5px;
`;

const Calculator = () => {
  const [input, setInput] = useState(0);
  const [currentOperator, setCurrentOperator] = useState(null);
  const [result, setResult] = useState(null);
  const [tempInput, setTempInput] = useState(null);
  const [tempOperator, setTempOperator] = useState(null);

  const onPressNum = (num) => {
    if (currentOperator) {
      setResult(input);
      setInput(num);
    } else {
      setInput(input * 10 + num);
    }
  };

  const onPressOperator = (operator) => {
    if (operator !== "=") {
      setCurrentOperator(operator);
    } else {
      let finalResult = result;
      switch (currentOperator) {
        case "+":
          finalResult = result + input;
          break;
        case "-":
          finalResult = result - input;
          break;
        case "*":
          finalResult = result * input;
          break;
        case "/":
          finalResult = result / input;
          break;

        default:
          break;
      }
      setResult(finalResult);
      setInput(finalResult);
    }
  };

  const onPressReset = () => {
    setInput(0);
    setCurrentOperator(null);
    setResult(null);
    setTempInput(null);
    setTempOperator(null);
  };

  return (
    <View style={{ flex: 1, width: 250, justifyContent: "center" }}>
      <Text>input: {input}</Text>
      <Text>currentOperator: {currentOperator}</Text>
      <Text>result: {result}</Text>
      <Text>tempInput: {tempInput}</Text>
      <Text>tempOperator: {tempOperator}</Text>

      <InputContainer>
        <Text style={{ color: "white", fontSize: 35, textAlign: "right" }}>{input}</Text>
      </InputContainer>
      <ButtonContainer>
        <Button type="reset" text="AC" onPress={onPressReset} flex={3} />
        <Button type="operator" text="/" onPress={() => onPressOperator("/")} flex={1} />
      </ButtonContainer>
      <ButtonContainer>
        <Button type="num" text="7" onPress={() => onPressNum(7)} flex={1} />
        <Button type="num" text="8" onPress={() => onPressNum(8)} flex={1} />
        <Button type="num" text="9" onPress={() => onPressNum(9)} flex={1} />
        <Button type="operator" text="*" onPress={() => onPressOperator("*")} flex={1} />
      </ButtonContainer>
      <ButtonContainer>
        <Button type="num" text="4" onPress={() => onPressNum(4)} flex={1} />
        <Button type="num" text="5" onPress={() => onPressNum(5)} flex={1} />
        <Button type="num" text="6" onPress={() => onPressNum(6)} flex={1} />
        <Button type="operator" text="-" onPress={() => onPressOperator("-")} flex={1} />
      </ButtonContainer>
      <ButtonContainer>
        <Button type="num" text="1" onPress={() => onPressNum(1)} flex={1} />
        <Button type="num" text="2" onPress={() => onPressNum(2)} flex={1} />
        <Button type="num" text="3" onPress={() => onPressNum(3)} flex={1} />
        <Button type="operator" text="+" onPress={() => onPressOperator("+")} flex={1} />
      </ButtonContainer>
      <ButtonContainer>
        <Button type="num" text="0" onPress={() => onPressNum(0)} flex={3} />
        <Button type="operator" text="=" onPress={() => onPressOperator("=")} flex={1} />
      </ButtonContainer>
    </View>
  );
};

export default Calculator;
