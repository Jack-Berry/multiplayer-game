import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎮 Multiplayer Game</Text>
      <Link href="/game" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Start Game</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
  },
  title: {
    fontSize: 32,
    color: "#fff",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#00bfff",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
