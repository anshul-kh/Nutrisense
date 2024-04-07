import React, { useEffect, useState } from 'react'
const { GoogleGenerativeAI } = require("@google/generative-ai");
import { View,ScrollView ,Text} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import tw from 'twrnc'
// ...
import { useRoute } from '@react-navigation/native';

const result = () => {
    const { searchText } = useRoute().params;
    const genAI = new GoogleGenerativeAI('AIzaSyDn88zEULPy1YcdKSg7MXAtoFqZ4VABOt0');
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const [data,setData] = useState("");

    const search = async(point:string)=> {
       try{
        const prompt = "I am Alex ,age 17 ,Can I eat "+point+"and  what effect they will have, also explain its ingredients with its nutritional value."
      
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setData(text);
        console.log(text)
       }catch(err){
        console.log(err)
       }
      }

      useEffect(()=>{
        search(searchText);
      },[])

  return (
    <View style={tw`flex-1 bg-black p-7 flex justify-center items-center gap-10`}>
       <View style={tw`flex flex-row justify-center items-center`} >
       <Feather name="database" size={40} color="white" />
        <Text style={tw`text-white text-2xl`}>
            Result!
        </Text>
       </View>

       <View style={tw`w-72 h-3/4 border-white border-2 rounded-2xl`}>
        <ScrollView>
          <Text style={tw`text-white text-sm`}>
            {data}
          </Text>
          </ScrollView>
       </View>

       <Link href={'/'}>
            <View style={tw`w-56 justify-center items-center h-12 rounded-xl bg-blue-600`}>
                <Text style={tw`text-white text-2xl`}>
                    Go Back
                </Text>
            </View>
       </Link>
    </View>
  )
}

export default result