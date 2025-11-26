import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

type Status = "done" | "missed" | "today";

type MonthKey = string;

const monthData: Record<MonthKey, Status[]> = {
  "2025-10": [
    "done","done","missed","missed","done","done","done",
    "missed","missed","done","done","done","missed","done",
    "done","missed","missed","done","done","done","done",
    "missed","missed","done","done","done","done", "missed",
    "missed","done",

  ],
  "2025-11": [
    "done","missed","done","done","done","done","done",
    "done","done","done","done","done","missed","missed",
    "missed","done","done","done","missed","missed","done",
    "done","missed","missed","done","done","today","missed",
    "missed","missed","missed"
  ],
};

const Grid = () => {
  const [currentMonth, setCurrentMonth] = useState<MonthKey>("2025-11");
  
  const changeMonth = (direction: "next" | "prev") => {
    const [year, month] = currentMonth.split("-").map(Number);

    const newDate = new Date(year, month - 1);
    newDate.setMonth(newDate.getMonth() + (direction === "prev" ? -1 : 1));

    const newKey = `${newDate.getFullYear()}-${String(
      newDate.getMonth() + 1
    ).padStart(2, "0")}`;

    // Hanya update jika data bulan tersebut tersedia
    if (monthData[newKey]) {
      setCurrentMonth(newKey);
    }
  };

  const getMonthName = (key: string) => {
    const [y, m] = key.split("-").map(Number);
    const date = new Date(y, m - 1);
    return date.toLocaleString("en-US", { month: "long" });
  };

  const daysData = monthData[currentMonth];

  return (
    <View style={styles.GridContainer}>
      <View style={styles.HeaderGrid}>
        <View style={styles.monthGroup}>
          <Text>{getMonthName(currentMonth)}</Text>
          <Text>{currentMonth.split("-")[0]}</Text>
        </View>

        <View style={styles.changeMonthButton}>
          <TouchableOpacity onPress={() => changeMonth("prev")}>
            <Image
              source={require("../assets/images/BackButton.png")}
              style={styles.BackButton}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => changeMonth("next")}>
            <Image
              source={require("../assets/images/FowardButton.png")}
              style={styles.NextButton}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.grid}>
        {daysData.map((status: Status, index: number) => (
          <View
            key={index}
            style={[
              styles.dayBox,
              status === "done" && { backgroundColor: "#00A991" },
              status === "missed" && { backgroundColor: "#B0BEC5" },
              status === "today" && { backgroundColor: "#FFEB3B" },
            ]}
          />
        ))}
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
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },

  GrindInfo: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 10,
  },

  grid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 14,
    columnGap: 14,
    justifyContent: "flex-start",
    paddingVertical: 10,
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
  },
  dayBox: {
    width: 35,
    height: 35,
    borderRadius: 6,
  },
  changeMonthButton: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
  },

  monthGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },

  BackButton: {
    width: 20,
    height: 20,
  },
  NextButton: {
    width: 20,
    height: 20,
  },
});

export default Grid;
