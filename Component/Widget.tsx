import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { router } from "expo-router";
const Separator = () => <View style={styles.separator} />;

const Header = () => (
  <View style={styles.headercontainer}>
    <Image source={require("../assets/images/emojiheader.png")} />
    <View style={styles.headertextcontainer}>
      <Text style={styles.text}>Good Morning!</Text>
      <Text style={styles.text}>Kamis, 14-03-2025</Text>
    </View>
    <Image source={require("../assets/images/profileimage.png")} />
  </View>
);

const Widget = () => (
  <View style={styles.widgetSeperator}>
    <View style={styles.container}>
      <Text>streak</Text>
      <Image source={require("../assets/images/StreakIcon.png")} style={styles.imageWidget}/>
      <Text>10 days streak</Text>
    </View>

    <Separator />

    <View style={styles.container}>
      <Text>Progress</Text>
      <Image source={require("../assets/images/ProgressIcon.png")} style={styles.imageWidget}/>
      <Text>60%</Text>
    </View>

    <Separator />

    <View style={styles.container}>
      <Image source={require("../assets/images/NewHabbitIcon.png")} style={styles.imageWidget}/>
       <Pressable
        style={styles.AddNewButton}
        onPress={() => router.push("/AddNewHabbit")}
      >
        <Text style={styles.AddNewText}>Add New Habbit</Text>
      </Pressable>
    </View>
  </View>
);

const styles = StyleSheet.create({
  headercontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxHeight: 81,
    maxWidth: 400,
  },
  headertextcontainer: {
    flexDirection: "column",
  },
  container: {
    flex: 1,
    // flexDirection: "column",
    justifyContent: "center",
    marginRight: 16,
    backgroundColor: "#00A991",
    height: 123,
    width: 99,
    borderRadius: 12,
    maxHeight: 99,
    maxWidth: 123,
  },
  widgetSeperator: {
    // justifyContent: "center",
    flexDirection: "row",
    marginVertical: 15,
    
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    // marginHorizontal: 7,
  },
  text: {
    fontSize: 26,
  },
  text2: {
    fontSize: 16,
  },
  imageWidget: {
    
    minHeight: 50,
    minWidth: 50,
  },
  AddNewButton: {
    marginTop: 8,
    backgroundColor: "#00A991",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignSelf: "center",
  },
  AddNewText: {
    fontSize: 13,
    justifyContent: "center"
  },
});

export { Header, Widget };
