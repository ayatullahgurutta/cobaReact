/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    let userUrl = 'https://api.mesosfer.com/api/v2/users';
    return fetch(userUrl, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "X-Mesosfer-AppId": "tzVOewKnss",
        "X-Mesosfer-AppKey": "ACNRwDdYOzGekYkDPbd1ffNpEPH0nr8J"
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  regUser = () => {
    let userUrl = 'https://api.mesosfer.com/api/v2/users';
    let payload = {
      firstname: this.userFirst,
      lastname: this.userLast,
      email: this.userMail,
      password: this.userPass,
    }
    console.log(JSON.stringify(payload));
    return fetch(userUrl, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "X-Mesosfer-AppId": "tzVOewKnss",
        "X-Mesosfer-AppKey": "ACNRwDdYOzGekYkDPbd1ffNpEPH0nr8J"
      },
      body: JSON.stringify(payload)
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Selamat Datang!
        </Text>
        <Image source={require('./img/V_icon.png')} style={styles.images}/>
        <Text style={styles.titles}>
          User Reg
        </Text>
        <Text>First Name: </Text>
        <TextInput
          onChangeText={(text) => this.userFirst = text}
          style={{width: 150, height: 30}}/>
        <Text>Last Name: </Text>
        <TextInput
          onChangeText={(text) => this.userLast = text}
          style={{width: 150, height: 30}}/>
        <Text>Email: </Text>
        <TextInput
          onChangeText={(text) => this.userMail = text}
          style={{width: 150, height: 30}}/>
        <Text>Password: </Text>
        <TextInput
          secureTextEntry={true}
          onChangeText={(text) => this.userPass = text}
          style={{width: 150, height: 30}}/>
        <Button
          onPress={this.regUser}
          title="Register"
          accessibilityLabel="Registering User"
          style={styles.images}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  titles: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  images: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  btnReg: {
    color: '#50C878',
    marginTop: 10,
  }
});
