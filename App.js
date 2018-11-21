import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class HelloWithName extends React.Component{
  render(){
    return (
      <View style={{color: 'green'}}>
        <Text>{this.props.name}, Handsome Boy !!!</Text>
      </View>
    );
  }
}
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <HelloWithName name="Hoa"></HelloWithName>
        <HelloWithName name="Thuan"></HelloWithName>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
