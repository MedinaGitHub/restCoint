import React from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import Expo from "expo";
import ContainerHome from './ContainerHome.js';
import ContainerCamera from './ContainerCamera.js';
import ComponentQr from './ComponentQr';
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";

import Funcstore from "./Store";
const store = Funcstore();


export const HomeApp = StackNavigator(
  {
    Home: { screen: ContainerHome },
    Camera: { screen: ContainerCamera }
  },
  {
    navigationOptions: {
      headerStyle: {
        marginTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
      }
    }
  }
);

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '0',
      amount: '0'
    };
  }

  changeValue(newValue) {

    console.log(newValue)
    var total = (parseInt(this.state.value) - parseInt(newValue));
    this.setState({
      value: total
    })
  }

  minar() {

    var value = (parseInt(this.state.value))

    this.setState({
      value: value + 1
    })

  }

  render() {
    return (
      <Provider store={store}>
        <HomeApp />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
