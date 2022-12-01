import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { ThreadScreen } from "./src/features/threads/screens/threads.screen";

export default function App() {
  return (
    <>
      <ThreadScreen />
    </>
  );
}
