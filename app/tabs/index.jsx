import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

const index = () => {
  return (
    <SafeAreaView style={style.conatainer}>
      <Text>index</Text>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  conatainer: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});

export default index;
