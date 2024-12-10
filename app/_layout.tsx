import MainNavigator from "@/navigation/MainNavigator";
import { StyleSheet, View, Text } from "react-native";
import PropcutLogo from "../assets/Images/propcut.svg"; // Ensure correct path

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.container}>
      <MainNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
