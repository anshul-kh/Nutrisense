import { View, Text, TextInput, Image, ScrollView } from "react-native";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState,useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Tab() {
    const [name,setName] = useState(null);
    const [gender,setGender] = useState(null);
    const [age,setAge] = useState(null);
    const [disaese,setDisease] = useState(null);
    const [diabitic,setDiabitic] = useState(null);
    const [allergic,seAllergic] = useState(null);
    const [record,setRecord] = useState(null);

    useEffect(() => {
        async function storeData() {
          await AsyncStorage.setItem('name', name);
          await AsyncStorage.setItem('gender', gender);
          await AsyncStorage.setItem('age', age);
          await AsyncStorage.setItem('disease', disaese);
          await AsyncStorage.setItem('diabitic', diabitic);
          await AsyncStorage.setItem('allergic', allergic);
          await AsyncStorage.setItem('record', record);
        }
    
        storeData();
      }, [name, gender, age, disaese, diabitic, allergic, record]);

  return (
    <View style={tw`flex-1 bg-black flex p-7 jusitfy-center gap-10`}>
      <ScrollView>
        <View style={tw`flex flex-row gap-05 flex justify-center items-center`}>
          <MaterialIcons name="account-circle" size={40} color="white" />
          <Text style={tw`text-2xl text-white`}>Your Info</Text>
        </View>

        <View style={tw`flex justify-center items-start gap-8 flex-col `}>
          <Text style={tw`text-xl text-white`}>Name</Text>
          <View style={tw`flex flex-row justify-center items-center`}>
        <TextInput
          style={tw`h-14 placeholder:text-white text-lg w-78 text-white px-4 rounded-2xl border-slate-600 border-2`}
          placeholder="Search here"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
        </View>

        <View style={tw`flex justify-center items-start gap-8 flex-col `}>
          <Text style={tw`text-xl text-white`}>Gender</Text>
          <View style={tw`flex flex-row justify-center items-center`}>
        <TextInput
          style={tw`h-14 placeholder:text-white text-lg w-78 text-white px-4 rounded-2xl border-slate-600 border-2`}
          placeholder="Search here"
          value={gender}
          onChangeText={(text) => setGender(text)}
        />
      </View>
        </View>

        <View style={tw`flex justify-center items-start gap-8 flex-col `}>
          <Text style={tw`text-2xl text-white`}>Age</Text>
          <View style={tw`flex flex-row justify-center items-center`}>
        <TextInput
          style={tw`h-14 placeholder:text-white text-lg w-78 text-white px-4 rounded-2xl border-slate-600 border-2`}
          placeholder="Search here"
          value={age}
          onChangeText={(text) => setAge(text)}
        />
      </View>
        </View>

        <View style={tw`flex justify-center items-start gap-8 flex-col `}>
          <Text style={tw`text-2xl text-white`}>Disease</Text>
          <View style={tw`flex flex-row justify-center items-center`}>
        <TextInput
          style={tw`h-14 placeholder:text-white text-lg w-78 text-white px-4 rounded-2xl border-slate-600 border-2`}
          placeholder="Search here"
          value={disaese}
          onChangeText={(text) => setDisease(text)}
        />
      </View>
        </View>

        <View style={tw`flex justify-center items-start gap-8 flex-col `}>
          <Text style={tw`text-2xl text-white`}>Diabitic :-</Text>
          <View style={tw`flex flex-row justify-center items-center`}>
        <TextInput
          style={tw`h-14 placeholder:text-white text-lg w-78 text-white px-4 rounded-2xl border-slate-600 border-2`}
          placeholder="Search here"
          value={diabitic}
          onChangeText={(text) => setDiabitic(text)}
        />
      </View>
        </View>

        <View style={tw`flex justify-center items-start gap-8 flex-col `}>
          <Text style={tw`text-xl text-white`}>Allergic To :-</Text>
          <View style={tw`flex flex-row justify-center items-center`}>
        <TextInput
          style={tw`h-14 placeholder:text-white text-lg w-78 text-white px-4 rounded-2xl border-slate-600 border-2`}
          placeholder="Search here"
          value={allergic}
          onChangeText={(text) => seAllergic(text)}
        />
      </View>
        </View>

        <View style={tw`flex justify-center items-start gap-8 flex-col `}>
          <Text style={tw`text-xl text-white`}>Previous Record :-</Text>
          <View style={tw`flex flex-row justify-center items-center`}>
        <TextInput
          style={tw`h-14 placeholder:text-white text-lg w-78 text-white px-4 rounded-2xl border-slate-600 border-2`}
          placeholder="Search here"
          value={record}
          onChangeText={(text) => setRecord(text)}
        />
      </View>
        </View>
      </ScrollView>
    </View>
  );
}
