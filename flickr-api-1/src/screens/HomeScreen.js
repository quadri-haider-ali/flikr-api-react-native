import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import AppLoading from "expo-app-loading";
import ImageDetail from "../components/ImageDetail";
import axios from "axios";
import NetInfo from "@react-native-community/netinfo";

const fetchImages = async () => {
  try {
    const Images = await axios.get(
      "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s"
    );
    setApiData(Images);
    // { console.log(apiData);}
  } catch (err) {
    alert('Sorry something went wrong');
    console.log(err);
  }
};

const HomeScreen = ({ navigation }) => {
  // const [isOffline, setOfflineStatus] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
  //     const offline = !(state.isConnected && state.isInternetReachable);
  //     setOfflineStatus(offline);
  //   });
  // })
  
  // console.log('I am apiData');
  // console.log(apiData);
  // console.log(apiData.data.photos.photo);
  if (!loading) {
    return (
      <AppLoading
        startAsync={fetchImages}
        onFinish={() => {
          setLoading(!loading);
        }}
        onError={console.warn}
      />
    );
  }
  console.log(
    "===============================================",
    apiData.data.photos.photo.length
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Home page</Text>
      {/* {console.log(networkState.isConnected)} */}
      {/* {!isOffline && ( */}
        <FlatList
          data={apiData.data.photos.photo}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <ImageDetail uri={item.url_s} title={item.title} />;
          }}
        />
      {/* )} */}
      {isOffline && (<Text style={{fontSize:100}}>Sorry Network Issues</Text>)}
      {console.log("App can be closed now... all rendering done")}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 30,
  },
});

export default HomeScreen;
