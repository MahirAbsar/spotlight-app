import { styles } from "@/styles/auth.styles";
import { useAuth } from "@clerk/clerk-expo";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => signOut()} style={{ backgroundColor: "white" }}>
        <Text>Singout</Text>
      </TouchableOpacity>
    </View>
  );
}
