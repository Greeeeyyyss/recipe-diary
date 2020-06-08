import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class SplashScreen extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Main');
    }, 2000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon name="book" type='font-awesome' color='white' size={150}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignContent: 'center'
  }
});