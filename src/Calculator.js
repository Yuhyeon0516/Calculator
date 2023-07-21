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

  return (
    <View style={{ flex: 1, width: 250, justifyContent: "center" }}>
      <InputContainer>
        <Text style={{ color: "white", fontSize: 35, textAlign: "right" }}>{input}</Text>
      </InputContainer>
      <ButtonContainer>
        <Button type="reset" text="AC" onPress={() => {}} flex={3} />
        <Button type="operator" text="/" onPress={() => {}} flex={1} />
      </ButtonContainer>
      <ButtonContainer>
        <Button type="num" text="7" onPress={() => {}} flex={1} />
        <Button type="num" text="8" onPress={() => {}} flex={1} />
        <Button type="num" text="9" onPress={() => {}} flex={1} />
        <Button type="operator" text="X" onPress={() => {}} flex={1} />
      </ButtonContainer>
      <ButtonContainer>
        <Button type="num" text="4" onPress={() => {}} flex={1} />
        <Button type="num" text="5" onPress={() => {}} flex={1} />
        <Button type="num" text="6" onPress={() => {}} flex={1} />
        <Button type="operator" text="-" onPress={() => {}} flex={1} />
      </ButtonContainer>
      <ButtonContainer>
        <Button type="num" text="1" onPress={() => {}} flex={1} />
        <Button type="num" text="2" onPress={() => {}} flex={1} />
        <Button type="num" text="3" onPress={() => {}} flex={1} />
        <Button type="operator" text="+" onPress={() => {}} flex={1} />
      </ButtonContainer>
      <ButtonContainer>
        <Button type="num" text="0" onPress={() => {}} flex={3} />
        <Button type="operator" text="=" onPress={() => {}} flex={1} />
      </ButtonContainer>
    </View>
  );
};

export default Calculator;
