import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import ComponentQr from './ComponentQr';

export default class ContainerHome extends React.Component {


  constructor(props) {


    super(props);
    this.state = {
      value: '0',
      amount: '0'
    };
    console.log(this.props)
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


  openCamera() {

    console.log(this.props);

    this.props.navigation.navigate("Camera");
  }

  render() {
    return (
      <View style={styles.container}>

        <Button onPress={() => this.openCamera()}
          title="CAMARA"
          color="#841584"
        />

        <Text style={{ margin: 30 }}> {'RestCoint: ' + this.state.value}</Text>
        <ComponentQr changeValue={this.changeValue.bind(this)} />

        <Button onPress={() => this.minar()}
          title="MINAR"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"

        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
