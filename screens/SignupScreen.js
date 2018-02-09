import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Image, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class SignupScreen extends React.Component {

  static navigationOptions = {
    title: 'Signup'
  };

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
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome!
        </Text>
        <Image source={require('../images/V_icon.png')} style={styles.images}/>
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
        <Text>E-mail: </Text>
        <TextInput
          onChangeText={(text) => this.userMail = text}
          style={{width: 150, height: 30}}/>
        <Text>Password: </Text>
        <TextInput
          secureTextEntry={true}
          onChangeText={(text) => this.userPass = text}
          style={{width: 150, height: 30}}/>
        <View style={styles.btnList}>
          <View style={styles.btnReg}>
            <Button
              onPress={this.regUser}
              title="Register"
              color="#50C878"
              accessibilityLabel="Registering User"
            />
          </View>
          <View style={styles.btnReg}>
            <Button
              onPress={() => navigate('Login')}
              title="Change"
              color="#50C878"
              accessibilityLabel="Change Page"
            />
          </View>
        </View>
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
  btnList: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  btnReg: {
    marginStart: 5,
    marginEnd: 5,
  }
});