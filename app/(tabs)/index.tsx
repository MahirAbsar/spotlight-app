import { style } from "@/styles/auth.styles";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
      <Text style={style.title}>This is a text component</Text>
      <Link href="/notifications">Notifications</Link>
      <TouchableOpacity onPress={() => alert("Danger")}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}
