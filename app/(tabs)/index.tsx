import { styles } from "@/styles/auth.styles";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>This is a text component</Text>
      <Link href="/notifications">Notifications</Link>
      <TouchableOpacity onPress={() => alert("Danger")}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}
