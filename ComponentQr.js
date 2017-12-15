
import React, { Component } from 'react'
import QRCode from 'react-native-qrcode';

import {
  AppRegistry,
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';


export default class ComponentQr extends Component {
  state = {
    text: '0',
    value: '0'
  };

  _handlePress(value) {

    console.log(value)
    this.setState({
      value: value
    })
    this.props.changeValue(this.state.text)
  }


  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ text: text })}
          value={this.state.text}
        />
        <Button onPress={() => this._handlePress(this.state.text)}
          title="Vender"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          style={{ margin: 20 }}
        />
        <QRCode
          value={this.state.value}
          size={200}
          bgColor='purple'
          fgColor='white' />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },

  input: {
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 30,
    borderRadius: 5,
    padding: 5,
  }
});

