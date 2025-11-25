import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { router } from "expo-router";

const TaskList = () => {
  const DailyTask = [
    {
      id: 1,
      label: "learn to draw",
      icon: require("../assets/images/HobbyAndCreativity.png"),
      statusColor: "#00A991",
      iconBackgroundColor: "#E1BEE7",
    },
    {
      id: 2,
      label: "gym leg day",
      icon: require("../assets/images/HealthAndFitness.png"),
      statusColor: "#00A991",
      iconBackgroundColor: "#FFAB91",
    },
    {
      id: 3,
      label: "clean bedroom",
      icon: require("../assets/images/HomeAndRoutine.png"),
      statusColor: "#B0BEC5",
      iconBackgroundColor: "#90CAF9",
    },
    {
      id: 4,
      label: "journaling",
      icon: require("../assets/images/PersonalGrowth.png"),
      statusColor: "#B0BEC5",
      iconBackgroundColor: "#A5D6A7",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Daily Task</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      {DailyTask.map((task) => (
        <View key={task.id} style={styles.taskRow}>
          <View
            style={[styles.statusDot, { backgroundColor: task.statusColor }]}
          />
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: task.iconBackgroundColor },
            ]}
          >
            <Image source={task.icon} style={styles.icon} />
          </View>
          <Text style={styles.taskText}>{task.label}</Text>
          <Pressable   onPress={() => router.push("/EditHabbit")}>
            <Image
              source={require("../assets/images/EditPencil.png")}
              style={styles.editIcon}
            />
          </Pressable>
        </View>
      ))}
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 20,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
  },
  seeAll: {
    fontSize: 14,
    color: "#00A991",
  },

  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  statusDot: {
    width: 14,
    height: 14,
    borderRadius: 10,
    marginRight: 12,
  },

  icon: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },

  taskText: {
    flex: 1,
    fontSize: 16,
  },

  editIcon: {
    width: 30,
    height: 30,
    marginLeft: 12,
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
});

export default TaskList;
