import React from 'react';
import { Text, TextInput, FlatList, StyleSheet, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { addRecipe } from "../redux/action";

class AddDetailScreen extends React.Component {
  state = {
    name: '',
    ingredients: [],
    directions: []
  }

  onSaveRecipe = () => {
    const omelette = {
      name: 'Omelette',
      ingredients: [
        { id: 1, name: 'Egg' },
        { id: 2, name: 'Cheese' },
        { id: 3, name: 'Salt' }
      ],
      directions: [
        { id: 1, step: 'Mix all ingredients' },
        { id: 2, step: 'Fry mixture in a pan ' }
      ]
    }
    const toast = {
      name: 'Toast',
      ingredients: [
        { id: 1, name: 'Bread' },
        { id: 2, name: 'Butter' },
        { id: 3, name: 'Sugar' }
      ],
      directions: [
        { id: 1, step: 'Spread butter in bread' },
        { id: 2, step: 'Add sugar as toppings' },
        { id: 3, step: 'Add bread in the oven' }
      ]
    }
    this.props.addRecipe(omelette);
    this.props.addRecipe(toast);
    this.props.navigation.navigate('RecipeList');
  };

  onNameChange = (text) => {
    this.setState({ name: text });
  }

  render() {
    return (
      <View>
        <Text>Recipe</Text>
        <TextInput value={this.state.name} onChangeText={(text) => this.onNameChange(text)}/>
        <Text>Ingredients</Text>
        <Text>Directions</Text>
        <Button title="Save Recipe" color="green" onPress={() => this.onSaveRecipe()}/>
      </View>
    )
  }
}

export default connect(null, { addRecipe })(AddDetailScreen)