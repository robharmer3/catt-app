import { useNavigation } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const navigation = useNavigation();

  function buttonPress() {
    const ranNum = Math.floor(Math.random() * 67);
    navigation.navigate("Cat", { catNum: ranNum });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome</Text>
      <Text style={styles.text}>This is my simple app.</Text>
      <Text style={styles.text}>
        If you would like to see some cute cats, press the button.
      </Text>
      <View style={styles.button}>
        <Button
          title="Press me"
          onPress={buttonPress}
          accessibilityLabel="Learn more about cats button"
        />
      </View>
      <Text style={styles.footer}>Created by Rob Harmer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    backgroundColor: "green",
    alignItems: "center",
  },
  header: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    padding: 50,
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    padding: 20,
  },
  footer: {
    color: "white",
    fontSize: 12,
    padding: 10,
    position: "fixed",
    bottom: 0,
    alignContent: "center",
  },
  button: {
    color: "pink",
    fontSize: 60,
    flexDirection: "row",
    justifyContent: "center",
  },
});
