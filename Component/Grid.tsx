import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Grid = () => {
  return (
    <View style={styles.GridContainer}>
      <View style={styles.HeaderGrid}>
        <Text>November</Text>
        <Text>2025</Text>
      </View>

      <View style={styles.grid}>

      </View>

      <View style={styles.GrindInfo}>
        <View style={styles.statusItem}>
          <View style={[styles.box, { backgroundColor: "#00A991" }]} />
          <Text>Done</Text>
        </View>
        <View style={styles.statusItem}>
          <View style={[styles.box, { backgroundColor: "#B0BEC5" }]} />
          <Text>Missed</Text>
        </View>
        <View style={styles.statusItem}>
          <View style={[styles.box, { backgroundColor: "#FFFF00" }]} />
          <Text>Today</Text>
        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
HeaderGrid: {
    flexDirection: "row",
    columnGap: 16,
    flexWrap: "wrap",
    width: "100%",
  },

  GrindInfo: {
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  paddingTop: 10,
},
  
  grid: {

    height: 214,
    backgroundColor: "#00A991",
    borderColor: "#00A991",
    width: "100%",
    borderWidth: 0,
  },
  
  statusItem: {
  flexDirection: "row",
  alignItems: "center",
  marginLeft: 16,
},
  box: {
    width: 15,
    height: 15,
    borderRadius: 3,
  },
  
  GridContainer: {
   width: "100%",
   alignSelf: "stretch",
  }
});

export default Grid;
