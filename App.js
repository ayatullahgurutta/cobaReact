import React from 'react';
import { StyleSheet, Text, TextInput, View, ListView, Image } from 'react-native';

export default class App extends React.Component {
  componentDidMount() {
	let userUrl = 'https://api.mesosfer.com/api/v2/users';
    return fetch(userUrl, {
        		  method: 'GET',
  				  headers: {
					"Content-Type": "application/json",
					"X-Mesosfer-AppId": "tzVOewKnss",
					"X-Mesosfer-AppKey": "ACNRwDdYOzGekYkDPbd1ffNpEPH0nr8J"
  		  		  }
        		}
     		  )
    		  .then((response) => response.json())
    		  .then((responseJson) => {
    		  })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <Image source={require('./img/V_icon.png')} style={{width: 150, height: 150}}/>
        <Text>Username: </Text>
		<TextInput style={{width: 150, height: 30}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87ceeb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
