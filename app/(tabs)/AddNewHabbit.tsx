import React from "react";
import { StyleSheet, View, Text, TextInput, Pressable, Button } from "react-native";

const AddNewHabbit = () => {
  return (
    <View style={styles.AddNewHabbitPage}>
        <View>
             <View>New Habbit</View>
            <TextInput placeholder="Meditation" placeholderTextColor={"#656363"} style={styles.textInput}></TextInput>
        </View>

        <View>
             <View>Description</View>
        <TextInput placeholder="meditation before sleep" placeholderTextColor={"#656363"} style={styles.textInput}></TextInput>
        </View>
        <View>
            <View>Goals</View>
        <TextInput placeholder="15 minutes of meditation everyday" placeholderTextColor={"#656363"} style={styles.textInput}></TextInput>
        </View>
        <View>
            <View>Types of Habbit</View>
        </View>
        <View style={styles.dayselectContainer}>
            <View>Select Day</View>
            <View>Everyday</View>
        </View>
         <View style={styles.daysSelection}>
                <View>M</View>
                <View>T</View>
                <View>W</View>
                <View>T</View>
                <View>F</View>
                <View>S</View>
                <View>S</View>
            </View>
        <View style={styles.saveButtonContainer}>
          <Pressable 
        //   style={styles.saveButton}
          >
            <Text style={styles.saveButtonText}>save </Text>
          </Pressable>
        </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
AddNewHabbitPage: {
    paddingHorizontal: 20,
    marginTop: 72,
    width: "100%",
},
HeaderGrid: {
    flexDirection: "row",
    columnGap: 16,
    flexWrap: "wrap",
    width: "100%",
  },
textInput: {
    borderColor: "007F6D",
    borderRadius: 5,
    borderWidth: 2,
    
},
dayselectContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
},
// saveButton: {
//     justifyContent: "flex-end",
//    backgroundColor: "#00A991",
//    width: 104,
//    height: 45,
// },
saveButtonText: {
    fontSize: 25,
},
saveButtonContainer: {
    justifyContent: "flex-end"
},
daysSelection: {
    justifyContent: "space-evenly",
    flexDirection: "row"
}

});

export default AddNewHabbit;
