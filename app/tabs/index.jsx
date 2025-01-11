import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "../../utils/StyleConfig";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";

const index = () => {
  const chatData = [
    {
      profile: null,
      name: "Athalia Putri",
      lastMessage: "Good morning, did you sleep well?",
      date: "17/6/204",
      seen: false,
      count: 1,
    },
  ];

  const renderChats = ({ item }) => {
    return (
      <View style={style.itemContainer}>
        <View style={style.profileSection}>
          {item.profile && <Image />}

          <View style={style.onlineView}>
            <View style={style.innerOnline}></View>
          </View>
        </View>

        <View style={style.details}>
          <View style={style.firstView}>
            <Text style={style.name}>{item.name}</Text>
            <Text style={style.date}>{item.date}</Text>
          </View>
          <View></View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={style.conatainer}>
      <Text
        style={{
          fontSize: moderateScale(20),
          color: Colors.light.textPrimary,
          fontFamily: Fonts.Poopins_600,
        }}
      >
        {"Chats"}
      </Text>

      <FlatList
        data={chatData}
        renderItem={renderChats}
        style={style.chatsContainer}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  conatainer: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: scale(15),
  },
  itemContainer: {
    // width: "100%",
    height: verticalScale(70),
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  chatsContainer: {
    marginTop: scale(20),
  },
  profileSection: {
    width: scale(70),
    height: scale(70),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#166FF6",
    borderRadius: scale(16),
  },

  onlineView: {
    width: scale(20),
    height: scale(20),
    backgroundColor: "#FFFF",
    borderRadius: scale(15 / 2),
    position: "absolute",
    top: scale(-5),
    right: scale(-5),
    alignItems: "center",
    justifyContent: "center",
  },
  innerOnline: {
    width: scale(12),
    height: scale(12),
    borderRadius: scale(12 / 2),
    backgroundColor: "#2CC069",
  },
  details: {
    marginLeft: scale(5),
    alignSelf: "flex-start",
    backgroundColor: "red",
  },
  name: {
    fontFamily: Fonts.Poopins_500,
    fontSize: scale(18),
    color: Colors.light.textPrimary,
  },
  firstView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  date: {
    position: "absolute",
    right: 0,
  },
});

export default index;
