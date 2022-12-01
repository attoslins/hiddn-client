import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { ThreadComponent } from "../components/thread-info.component";

export const ThreadScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <ThreadComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
