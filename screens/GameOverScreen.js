import { Image, View, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import Title from "../components/ui/Title";

function GameOverScreen() {
  return (
    <View>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/images/success.png")} />
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    // overflow: "hidden",
    margin: 36
  },
  image: {
    width: '100%',
    heigth: '100%'
  }
});
