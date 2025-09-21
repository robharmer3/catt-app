import { StyleSheet } from "react-native";
import { getCatImg } from "../endpoints";
import useFetchApi from "../endpoints Hook";

export default function CatImage({ cat }) {
  const { isLoading, isError, data } = useFetchApi(getCatImg, cat.id);

  console.log(data.url);

  if (isLoading) {
    return <p>...is Loading</p>;
  }

  if (isError) {
    return <p>ERROR!</p>;
  }

  if (data) {
    return <img src={data.url} alt="cat.name" style={styles.image} />;
  }
}

const styles = StyleSheet.create({
  image: {
    maxHeight: "100%",
    maxWidth: "50%",
    borderRadius: 25,
  },
});
