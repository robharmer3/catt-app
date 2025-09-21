import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { getBreeds } from "../endpoints";
import useFetchApi from "../endpoints Hook";
import CatImage from "./CatImage";

export default function Explore() {
  const { isLoading, isError, data } = useFetchApi(getBreeds);
  const local = useLocalSearchParams();
  const { catNum } = local;

  if (isLoading) {
    return <Text>...is Loading</Text>;
  }

  if (isError) {
    return <Text>ERROR!</Text>;
  }

  if (data) {
    return (
      <View className="card" style={styles.container}>
        <Text style={styles.header}>{data[catNum].name}</Text>
        <CatImage cat={data[catNum]} />
        <Text style={styles.text}>
          Description: {data[catNum].description}{" "}
        </Text>
      </View>
    );
  }
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
});
