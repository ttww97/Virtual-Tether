import React, { Component } from "react";
import { View, Text } from "react-native";
import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";

class Swipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myText: "Swipe to select path",
      gestureName: "none"
    };
  }

  onSwipeLeft(gestureState) {
    this.setState({ myText: "Green Oval" });
  }

  onSwipeRight(gestureState) {
    this.setState({ myText: "Pink Oval" });
  }

  onSwipe(gestureName, gestureState) {
    const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    this.setState({ gestureName: gestureName });
  }

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    return (
      <GestureRecognizer
        accessibilityTraits="allowsDirectInteraction"
        accessible={true}
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeLeft={state => this.onSwipeLeft(state)}
        onSwipeRight={state => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 0.3,
          backgroundColor: "#e6e6e6",
          width: "100%",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ fontSize: 40 }} accessibilityLabel={this.state.myText}>
          {this.state.myText}
        </Text>
      </GestureRecognizer>
    );
  }
}

export default Swipe;
