import * as React from "react";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import Onboarding from "../components/Onboarding";
import SvgExample from "../components/svgExample";
import { StatusBar } from "expo-status-bar";

export default function UserHomeScreen({ navigation }) {
  const renderTrees = (numTrees) => {
    const gridWidth = 315;
    const gridHeight = 300;
    const numRows = 6;
    const numCols = 7;

    const boxWidth = gridWidth / numCols;
    const boxHeight = gridHeight / numRows;

    const treesPerRow = Math.ceil(numTrees / numCols);
    const treesPerCol = Math.ceil(numTrees / numCols);

    let trees = [];
    for (let i = 0; i < numTrees; i++) {
      const row = Math.floor(i / numCols);
      const col = i % numCols;
      const x = col * boxWidth + boxWidth / 2 - 24;
      const y = row * boxHeight + boxHeight / 2 - 19;
      trees.push({ x, y });
    }

    return trees.map((tree, index) => (
      <Image
        key={index}
        source={require("../assets/image-removebg-preview (1).png")}
        style={[styles.treeImage, { top: tree.y, left: tree.x }]}
        resizeMode="contain"
      />
    ));
  };
  return (
    <ImageBackground
      source={require("../assets/voluntree_background_edited.png")}
      style={styles.backgroundImage}
    >
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.svgContainer}>
          <SvgExample />
          {renderTrees(10)}
        </View>
        <Text style={styles.header}>Hi xx,</Text>
        <Text style={styles.subheader}>You have spent 10 hours with GUI!</Text>
        <View style={styles.tipContainer}>
          <Text style={styles.tipText}>Tip of the day!</Text>
          <Text style={styles.tipSubText}> Apples are oranges </Text>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  treeImage: {
    position: "absolute",
    top: 7,
    left: 0,
    width: "12%",
    height: "12%",
  },
  svgContainer: {
    position: "relative",
    bottom: 0,
    top: 180,
  },
  header: {
    textAlign: "center",
    bottom: 205,
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  subheader: {
    textAlign: "center",
    bottom: 195,
    fontSize: 18,
    color: "white",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  tipContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
    width: "80%",
    height: 70,
    top: 150,
  },
  tipText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "teal",
  },
  tipSubText: {
    fontSize: 18,
    textAlign: "center",
    color: "teal",
  },
});
