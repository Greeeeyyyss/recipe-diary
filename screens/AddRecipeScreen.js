import React from 'react';
import {Text, FlatList, StyleSheet, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';

export default class AddDetailScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Recipe</Text>
        <Text>Ingredients</Text>
        <Text>Directions</Text>
        <Button title="Save Recipe"/>
      </View>
    )
  }
}