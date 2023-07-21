import { Text, TouchableOpacity } from "react-native";

const COLOR = {
  RESULT: "#4E4C51",
  RESET: "#5F5E62",
  OPERATOR: "#F39C29",
  NUM: "#5C5674",
};

const Button = ({ text, onPress, flex, type }) => {
  const backgroundColor = type === "reset" ? COLOR.RESET : type === "operator" ? COLOR.OPERATOR : type === "num" ? COLOR.NUM : "transparent";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flex, backgroundColor: backgroundColor, justifyContent: "center", alignItems: "center", height: 50, borderWidth: 0.2, borderColor: "black" }}
    >
      <Text style={{ color: "white", fontSize: 25 }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
