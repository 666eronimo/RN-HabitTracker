import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Switch,
  Image,
} from "react-native";
import { router } from "expo-router";

const EditHabbit = () => {
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previous) => {
      const newValue = !previous;

      if (newValue === true) {
        setSelectedDays(Days.map((d) => d.id));
      } else {
        setSelectedDays([]);
      }

      return newValue;
    });
  };

  const toggleDay = (id: number) => {
    if (selectedDays.includes(id)) {
      setSelectedDays(selectedDays.filter((day) => day !== id));
    } else {
      setSelectedDays([...selectedDays, id]);
    }
  };

  React.useEffect(() => {
    if (selectedDays.length === Days.length) {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  }, [selectedDays]);

  const Days = [
    { id: 1, label: "M", textColor: "#FFFFFF" },
    { id: 2, label: "T", textColor: "#FFFFFF" },
    { id: 3, label: "W", textColor: "#FFFFFF" },
    { id: 4, label: "T", textColor: "#FFFFFF" },
    { id: 5, label: "F", textColor: "#FFFFFF" },
    { id: 6, label: "S", textColor: "#FFFFFF" },
    { id: 7, label: "S", textColor: "#FFFFFF" },
  ];

  const habitTypes = [
    {
      id: 1,
      label: "Personal Growth",
      icon: require("../../assets/images/PersonalGrowth.png"),
      bgColor: "#A5D6A7",
      borderColor: "#4CAF50",
      textColor: "#FFFFFF",
    },
    {
      id: 2,
      label: "Hobby and Creativity",
      icon: require("../../assets/images/HobbyAndCreativity.png"),
      bgColor: "#E1BEE7",
      borderColor: "#BA68C8",
      textColor: "#FFFFFF",
    },
    {
      id: 3,
      label: "Health and Fitness",
      icon: require("../../assets/images/HealthAndFitness.png"),
      bgColor: "#FFAB91",
      borderColor: "#FF7043",
      textColor: "#FFFFFF",
    },
    {
      id: 4,
      label: "Work and Productivity",
      icon: require("../../assets/images/WorkAndProductivity.png"),
      bgColor: "#FFF176",
      borderColor: "#FBC02D",
      textColor: "#FFFFFF",
    },
    {
      id: 5,
      label: "Home and Routine",
      icon: require("../../assets/images/HomeAndRoutine.png"),
      bgColor: "#90CAF9",
      borderColor: "#42A5F5",
      textColor: "#FFFFFF",
    },
  ];

  return (
    <View style={styles.AddHabbitPage}>
      <View style={styles.sectionSpacing}>
        <Pressable onPress={() => router.back()} style={styles.BackButton}>
          <Image source={require("../../assets/images/BackButton.png")} />
        </Pressable>
        <Text style={styles.sectionTitle}>Edit Habbit</Text>
        <TextInput
          placeholder="Meditation"
          placeholderTextColor={"#656363"}
          style={styles.textInput}
        ></TextInput>
      </View>

      <View style={styles.sectionSpacing}>
        <Text style={styles.sectionTitle}>Description</Text>
        <TextInput
          placeholder="meditation before sleep"
          placeholderTextColor={"#656363"}
          style={styles.textInput}
        ></TextInput>
      </View>
      <View style={styles.sectionSpacing}>
        <Text style={styles.sectionTitle}>Goals</Text>
        <TextInput
          placeholder="15 minutes of meditation everyday"
          placeholderTextColor={"#656363"}
          style={styles.textInput}
        ></TextInput>
      </View>
      <View>
        <Text style={styles.sectionTitle}>Types of Habbit</Text>
        <View style={styles.sectionSpacing}>
          <View style={styles.habitSection}>
            {habitTypes.map((item) => {
              const isSelected = selectedType === item.id;

              return (
                <Pressable
                  key={item.id}
                  onPress={() => setSelectedType(item.id)}
                  style={[
                    styles.habbitContainer,
                    {
                      backgroundColor: isSelected
                        ? item.borderColor
                        : item.bgColor,
                      borderColor: isSelected ? "#000" : item.borderColor,
                      transform: [{ scale: isSelected ? 1.05 : 1 }],
                    },
                  ]}
                >
                  <Image source={item.icon} style={styles.habitIcon} />

                  <Text
                    style={{ color: "white", marginLeft: 10, fontSize: 12 }}
                  >
                    {item.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      </View>
      <View style={styles.dayselectContainer}>
        <View>Select Day</View>
        <View style={styles.EverydayContainer}>
          <Text style={{ marginRight: 15 }}>Everyday</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>

      <View style={styles.EverydayContainer}>
        {Days.map((item) => {
          const isSelected = selectedDays.includes(item.id);

          return (
            <Pressable
              key={item.id}
              onPress={() => toggleDay(item.id)}
              style={{
                backgroundColor: isSelected ? "#00A991" : "transparent",
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 8,
                marginHorizontal: 5,
              }}
            >
              <Text
                style={{
                  color: isSelected ? "white" : item.textColor,
                  fontSize: 25,
                }}
              >
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.saveButtonContainer}>
        <Pressable style={styles.saveButton}>
          <Text style={styles.saveButtonText}>save </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AddHabbitPage: {
    paddingHorizontal: 20,
    marginTop: 72,
    width: "100%",
    flexDirection: "column",
  },
  sectionTitle: {
    fontSize: 25,
    marginBottom: 10,
  },
  HeaderGrid: {
    flexDirection: "row",
    columnGap: 16,
    flexWrap: "wrap",
    width: "100%",
  },
  textInput: {
    borderColor: "#007F6D",
    borderRadius: 5,
    borderWidth: 2,
    width: 383,
    height: 60,
    paddingLeft: 10,
    fontSize: 16,
  },
  dayselectContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  saveButton: {
    alignItems: "center",
    backgroundColor: "#00A991",
    width: 104,
    height: 40,
    borderRadius: 5,
  },
  saveButtonText: {
    fontSize: 25,
  },
  saveButtonContainer: {
    alignItems: "flex-end",
  },
  daysSelection: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginBottom: 20,
  },
  button: {
    padding: 4,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 14,
  },
  sectionSpacing: {
    marginBottom: 10,
  },

  habbitContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    paddingHorizontal: 10,
    height: 33,
    width: 175,
    borderRadius: 5,
    borderWidth: 1,
    minWidth: 150,
  },
  EverydayContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 25,
  },
  habitIcon: {
    marginLeft: 10,
    width: 17,
    height: 17,
  },
  habitSection: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  BackButton: {
    marginBottom: 10,
  },
});

export default EditHabbit;
