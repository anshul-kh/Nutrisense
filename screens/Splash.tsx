import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import LottieView from "lottie-react-native";
import Link from "../assets/share.png";
import Animation from "../assets/future.json";
import tw from 'twrnc';

const Splash = () => {
  return (
    <View style={tw `flex-1 w-full items-center justify-center bg-black`} >
      <View style={tw `flex-1 justify-center mt-10  w-full items-center`}>
        <View style={tw `flex justify-center items-center `}>
          <Text  style={tw ` mr-32 text-white text-6xl font-semibold`}>
            Welcome
          </Text>
          <LottieView
            style={{ width: 360, height: 300 }}
            source={Animation}
            autoPlay
            loop
          />
        </View>
        <View style={tw `flex flex-col mt-4 justify-center items-center `}>
          <View style={tw `flex flex-col mr-40 justify-center items-center`}>
            <Text  style={tw `text-white text-5xl mr-20 font-semibold `}>
              Your
            </Text>
            <Text style={tw `text-blue-600 ml-20 text-5xl`}>
              Health
            </Text>
          </View>
          <View style={tw `flex flex-col ml-32 justify-center items-center`}>
            <Text style={tw `text-white text-5xl mr-20 font-semibold`}>
              Your
            </Text>
            <Text  style={tw `text-blue-600 text-5xl ml-20 `}>
              Scan
            </Text>
          </View>
        </View>
        <View style={tw `w-10/12 mt-14 rounded-3xl flex items-center justify-center flex-row bg-blue-600 h-16`}>
          <Pressable
         style={tw `flex flex-row justify-center gap-36 items-center `}
            onPress={() => alert("Clicked")}
          >
            <Text style={tw ` text-3xl text-white`} >
              Explore
            </Text>
            <Image source={Link} style={tw `w-8 h-9`} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Splash;
