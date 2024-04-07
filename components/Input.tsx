import React from "react";
import { View, TextInput } from "react-native";
import { useState } from "react";
import tw from "twrnc";

const Input = () => {
  const [text, setText] = useState("");
  return (
    <View style={tw`flex-1 justify-center items-center bg-black`}>
      <View style={tw`flex flex-row justify-center items-center`}>
        <TextInput
          style={tw`h-14 placeholder:text-white text-lg w-78 text-white px-4 rounded-2xl border-slate-600 border-2`}
          placeholder="Search here"
          value={text}
          onChangeText={(text) => setText(text)}
        />
      </View>
    </View>
  );
};

export default Input;
