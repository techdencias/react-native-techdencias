/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class techdencias extends Component {
  render() {
    return (
      <View style={mycss.container}>
        <Text style={mycss.techdencias_title}>
          Techdencias React!
        </Text>
        <Text style={mycss.instructions}>
          Estoy escribiendo nativo desde js!
        </Text>
      </View>
    );
  }
}

const mycss = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#90D400',
  },
  techdencias_title: {
    fontSize: 25,
    textAlign: 'center',
    margin: 1,
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('techdencias', () => techdencias);
