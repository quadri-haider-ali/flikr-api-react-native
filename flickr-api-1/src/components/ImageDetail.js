import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: props.uri,
          // yha par change karne se he ho gya kaam
          cache: "force-cache",
        }}
      />
      <Text style={styles.content}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  img: {
    width: 200,
    height: 200,
  },
  content: {
    paddingTop: 10,
    fontSize: 15,
  },
});

export default ImageDetail;
