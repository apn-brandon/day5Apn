import React from "react";
import { Text, View, Button } from "react-native";
import axios from "axios";

const util = require("util");

// for loop the button array section
// jsonListArr = data.map(jsonInfo => (
//     <Button key={jsonInfo[0]}>{jsonInfo[1]}</Button>
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
        {/* <Text>{data[3]}</Text> */}
        <Text>{this.state.data[6][3]}</Text>
      </View>
      ));
    // );
  }

//   for loop example
  loopBoxes(jsonArr) {
    var jsonData = 0;

    for (var i = 0; i < jsonArr.length; i++) {
        if (jsonArr[i].selected) {
            jsonData++
        }
    }
    return jsonData
    console.log("Test for for loop", jsonData);
  }

  render() {

    let jsonData = this.state.data
    // console.log("this.props.navigation = "+ util.inspect(this.props.navigation, false, null));
    console.log("testing number one", this.state.data);
    console.log("Testing", this.state.data[1]);
    console.log("Testing for index", this.state.data[2])
    var { params } = this.props.navigation.state;

    return (
      <View>
        <Text>This is Hello World screen</Text>
        <Text>--------------------------</Text>
        {this.renderData()}
        {/* <Text>Params from home screen: {params.content}</Text> */}
      </View>
    );
  }
}
