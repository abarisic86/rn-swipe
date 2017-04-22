import React, { Component } from 'react'
import {
  View,
  Animated,
  PanResponder,
  Dimensions
} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width

class Deck extends Component {
  renderCards() {
    return this.props.data.map((item, index) => {
      if (index === 0) {
        return (
          <Animated.View
            key={item.id}
            style={ this.getCardStyle()}   
            {...this.state.panResponder.panHandlers}>
              {this.props.renderCard(item)}
          </Animated.View>
        )
      }
      return this.props.renderCard(item)
    })
  }

  getCardStyle() {
    const {position} = this.state

    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
      outputRange: ['-30deg','0deg','30deg']
    })

    return {
      ... this.state.position.getLayout(),
      transform: [{rotate: rotate}]
    }

  }

  constructor(props) {
    super(props)

    const position  = new Animated.ValueXY()
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({x: gesture.dx})
      },
      onPanResponderRelease: () => {}
    })
 
    this.state = { panResponder, position };
  }

  render() {
    return (
      <View>
          {this.renderCards()}
      </View>
    )
  }
}

export default Deck
