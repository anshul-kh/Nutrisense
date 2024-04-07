import { View, Text, TextInput, Image, Pressable } from "react-native";
import tw from "twrnc";
import { useState } from "react";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import Main from "../../../assets/main.jpg";
import { useNavigation } from '@react-navigation/native';

export default function Tab() {
  const [text, setText] = useState("Search");
  const { navigate } = useNavigation();

  return (
    <View style={tw`flex-1 justify-start items-start p-10 bg-black gap-5`}>
      <View style={tw`flex flex-row gap-2`}>
        <Text style={tw`text-3xl text-white`}>Hello!</Text>
        <AntDesign name="staro" size={28} color="white" />
      </View>

      <View style={tw`flex flex-row justify-center items-center`}>
        <TextInput
          style={tw`h-10 placeholder:text-white text-lg w-68 text-white px-4 rounded-2xl border-slate-600 border-2`}
          placeholder="Search here"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Pressable onPress={()=>{navigate('result', { searchText: text })}}>
          <View style={tw`flex justify-center items-center`}>
            <EvilIcons name="search" size={54} style={tw`mb-4`} color="white" />
          </View>
        </Pressable>
      </View>
      <View>
        <Image source={Main} style={tw`w-78 h-60 rounded-3xl`} />
        <View style={tw`mt-20`}>
            <Text style={tw`text-white text-sm`}>Recents :- </Text>
      <View style={tw`flex gap-5`}>
      <Link href={"/result"}>
            <View
              style={tw`border-b-2 flex flex-row gap-34 justify-center items-center border-slate-600 `}
            >
              <Text style={tw`text-white text-4xl`}>Kurkure</Text>
             <View style={tw`flex justify-center items-center mb-4`}>
             <EvilIcons name="external-link" size={58} color="white" />
             </View>
            </View>
          </Link>

          <Link href={"/result"}>
            <View
              style={tw`border-b-2 flex flex-row gap-24 justify-center items-center border-slate-600 `}
            >
              <Text style={tw`text-white text-4xl`}>Snack Lite</Text>
             <View style={tw`flex justify-center items-center mb-4`}>
             <EvilIcons name="external-link" size={58} color="white" />
             </View>
            </View>
          </Link>

          <Link href={"/result"}>
            <View
              style={tw`border-b-2 flex flex-row gap-46 justify-center items-center border-slate-600 `}
            >
              <Text style={tw`text-white text-4xl`}>Cake</Text>
             <View style={tw`flex justify-center items-center mb-4`}>
             <EvilIcons name="external-link" size={58} color="white" />
             </View>
            </View>
          </Link>
      </View>
        </View>
      </View>
    </View>
  );
}
