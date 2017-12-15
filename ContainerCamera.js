import { connect } from "react-redux";
import Camera from "./Camera";
import React from "react";
import { getQR } from "./ActionCreator";

class CameraContainer extends React.Component {
  render() {

    return <Camera {...this.props} />;

  }
}

//Este no lo use parece.
const mapStateToProps = (state, props) => {
  return { status: state };
};

const mapDispatchToProps = dispatch => {
  return {
    getQR: (navigation, data) => dispatch(getQR(navigation, data))
  };
};

const AppScreen = connect(mapStateToProps, mapDispatchToProps)(CameraContainer);

AppScreen.navigationOptions = {
  title: "Lector QR",
  headerTintColor: 'white',
  headerStyle: { backgroundColor: '#1AB394' }
};

export default AppScreen;
