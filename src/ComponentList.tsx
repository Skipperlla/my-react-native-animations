import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

import { useAppNavigation } from "./utils/useAppNavigation";
import { ComponentScreenList } from "./constants";

export default function ComponentList() {
  const navigation = useAppNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView>
        {Object.keys(ComponentScreenList).map((name) => {
          return (
            <TouchableOpacity
              key={name}
              style={styles.item}
              onPress={() => navigation.navigate(name as any)}
            >
              <Text>{name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
