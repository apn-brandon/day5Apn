import React from "react";
import { Text, View, Button } from "react-native";
import axios from "axios";

const util = require("util");

export default class HelloWorldScreen extends React.Component {
  static navigationOptions = {
    title: "Hello World Screen"
  };

  state = { data: [] };

  componentWillMount() {
    axios
      .get("https://devccc.assuredperformance.net/react_test.php")
      .then(response => this.setState({ data: response.data }));
  }

  renderData() {
    return this.state.data.map(data => (
    // return (
      <View>
        <Text>{data[3]}</Text>
      </View>
      ));
    // );
  }

  render() {
    // console.log("this.props.navigation = "+ util.inspect(this.props.navigation, false, null));
    console.log(this.state.data);
    var { params } = this.props.navigation.state;

    return (
      <View>
        <Text>This is Hello World screen</Text>
        {this.renderData()}
        {/* <Text>Params from home screen: {params.content}</Text> */}
      </View>
    );
  }
}
