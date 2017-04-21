import React, { Component } from 'react'
import { View, Animated } from 'react-native'

class Deck extends Component {
  renderCards() {
    return this.props.data.map(item => {
      return this.props.renderCard(item)
    })
  }

  render() {
    return (
      <Animated.View>
        <View>
          {this.renderCards()}
        </View>  
      </Animated.View>
    )
  }
}

export default Deck
