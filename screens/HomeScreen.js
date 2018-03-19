import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

// For Boxes to be displayed
const buttonColor = "grey";

// For Boxes
class ControlBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <TouchableHighlight
        style={[styles.btnClickContain, { backgroundColor: buttonColor }]}
      >
        <View style={styles.btnContainer}>
          <Text style={styles.btnText}> {this.props.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

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
          <ControlBox title="1" />
          <ControlBox title="2" />
        </Row>
        <Row>
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
              title="3"
            />
          </View>
          <ControlBox title="4" />
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
