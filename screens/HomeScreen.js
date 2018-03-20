import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

// for loop the button array section
// buttonsListArr = initialArr.map(buttonInfo => (
//     <Button key={buttonInfo[0]}>{buttonInfo[1]}</Button>
//   ));

//   let initialBoxArr = [
//     {
//       id: 1,
//       text: "Box1"
//     },
//     {
//       id: 1,
//       text: "Box2"
//     },
//     {
//       id: 1,
//       text: "Box3"
//     },
//     {
//       id: 1,
//       text: "Box4"
//     }
//   ];

// For Boxes to be displayed
const buttonColor = "grey";

// For Boxes
// class ControlBox extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   onPress = () => {
//     this.setState({
//       disabled: "disabled"
//     });
//   };

//   render() {
//     return (
//       <TouchableHighlight
//         onPress={this.onPress}
//         style={[styles.btnClickContain, { backgroundColor: buttonColor }]}
//       >
//         <View style={styles.btnContainer}>
//           <Text style={styles.btnText}> {this.props.title}</Text>
//         </View>
//       </TouchableHighlight>
//     );
//   }
// }

// For stack navigator to be displayed
const util = require("util");

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home Screen"
  };

  render() {
    console.log(
      "this.props.navigation = " +
        util.inspect(this.props.navigation, false, null)
    );

    var { navigate } = this.props.navigation;

    return (
      <Grid>
        <Row>
          {/* <ControlBox title="1" />
          <ControlBox title="2" /> */}
          {/* <View
            style={[styles.btnClickContain, { backgroundColor: buttonColor }]}
          >
            <Button
              style={styles.btnText}
              onPress={() =>
                navigate("HelloWorld", {
                  content: "Hello World"
                })
              }
              title="1"
            />
          </View> */}
          <View
            style={[styles.btnClickContain, { backgroundColor: buttonColor }]}
          >
            <Button
              style={styles.btnText}
              onPress={() =>
                navigate("HelloWorld")
              }
              title="1"
            />
          </View>
          <View
            style={[styles.btnClickContain, { backgroundColor: buttonColor }]}
          >
            <Button
              style={styles.btnText}
              onPress={() =>
                navigate("HelloWorld")
              }
              title="2"
            />
          </View>
        </Row>
        <Row>
          <View
            style={[styles.btnClickContain, { backgroundColor: buttonColor }]}
          >
            <Button
              style={styles.btnText}
              onPress={() =>
                navigate("HelloWorld")
              }
              title="3"
            />
          </View>
          <View
            style={[styles.btnClickContain, { backgroundColor: buttonColor }]}
          >
            <Button
              style={styles.btnText}
              onPress={() =>
                navigate("HelloWorld", {
                  content: "Hello World"
                })
              }
              title="4"
            />
          </View>
          {/* <ControlBox title="4" /> */}
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  btnClickContain: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    alignSelf: "stretch",
    backgroundColor: null,
    borderRadius: 5,
    padding: 5,
    marginTop: 100,
    marginBottom: 100,
    marginLeft: 15,
    marginRight: 15
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 15
  },
  btnText: {
    fontSize: 18,
    color: "#FAFAFA",
    textAlign: "center",
    alignSelf: "center"
  }
});
