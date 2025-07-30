import { Text, View, StyleSheet } from "react-native";

export default function GameScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Game screen coming soon...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
});
