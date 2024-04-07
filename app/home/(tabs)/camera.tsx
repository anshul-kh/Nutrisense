import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import tw from 'twrnc';

export default function BarcodeScanner() {

  const { navigate } = useNavigation();
  const isFocused = useIsFocused();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = async({ data }) => {
    setScanned(true);
    const response = await fetch(`https://world.openfoodfacts.net/api/v2/product/${data}?fields=product_name,nutriments`);
    const str = await response.json();
    // console.log(str)
    let content = await str?.product?.product_name;
    navigate("result", { searchText:content });
  };

  const reRenderScanner = () => {
    setScanned(false);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {isFocused && (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.scanner}
          onScrollEndDrag={reRenderScanner}
        />
      )}
      {scanned && (
        <View style={styles.buttonContainer}>
          <Button title={"Scan Again"} onPress={() => setScanned(false)} />
        </View>
      )}
      {!scanned && (
        <View style={styles.textContainer}>
          <Text style={styles.text}>Scan a barcode to get started !!</Text>
        </View>
      )}
      <View style={tw`w-72 bg-blue-600 h-16 rounded-3xl justify-center items-center mt-10`}>
        <Pressable onPress={()=>alert("Pressed")}>
            <Text style={tw`text-white text-2xl`}>
                Scan Here
            </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor:"#000"
  },
  scanner: {
    width: 700,
    height: 580,
    borderRadius: 10, // Apply the border radius
    overflow: "hidden",
    // marginTop:30
  },

  buttonContainer: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  textContainer: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  text: {
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
  },
});
