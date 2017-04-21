import React, { Component } from 'react'
import {
  View,
  Animated,
  PanResponder
} from 'react-native'

class Deck extends Component {
  renderCards() {
    return this.props.data.map(item => {
      return this.props.renderCard(item)
    })
  }

  constructor(props) {
    super(props)
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        console.log(event)
        console.log(gesture)
      },
      onPanResponderRelease: () => {}
    })

    this.state = { panResponder };
  }

  render() {
    return (
      <Animated.View>
        <View {...this.state.panResponder.panHandlers}>
          {this.renderCards()}
        </View>
        
      </Animated.View>
    )
  }
}

export default Deck
