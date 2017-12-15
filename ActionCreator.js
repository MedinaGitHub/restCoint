
export function getQR(navigation, data) {
  return (dispatch, getState) => {

    console.log('ENTRE A GERQR', data);
    console.log('navigation', navigation);

    dispatch({
      type: "SET_VALUE",
      value: data
    });
    navigation.navigate("Home");


  };

}
