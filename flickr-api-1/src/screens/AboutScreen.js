// imr
import React, {useState} from 'react';
// imrn
import { Text, View, StyleSheet } from 'react-native'
import NetInfo from "@react-native-community/netinfo";


const AboutScreen = () => {
  const [isOffline, setOfflineStatus] = useState(false);
  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });
  });
  return <View>
    <Text style={styles.textStyle}>About Page</Text>
    <Text>Connection Status: {isOffline}</Text>
  </View>
};


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 100,
  },
});

export default AboutScreen;