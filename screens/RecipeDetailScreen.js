import React from 'react';
import {Text, FlatList, StyleSheet, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {deleteRecipe} from "../redux/action";
import {connect} from 'react-redux';

class RecipeDetailScreen extends React.Component {

  onDeleteRecipe = recipe => {
    this.props.deleteRecipe(recipe)
    this.props.navigation.navigate('MyRecipes')
  }

  render() {
    const recipe = this.props.route.params.recipe;
    return (
      <View>
        <View>
          <Text>{recipe.name}</Text>
          <Icon name="star"/>
        </View>
        <View>
          <Text>Ingredients</Text>
          {recipe.ingredients.map(ingredient => {
            return <Text>{ingredient.name}</Text>
          })}
        </View>
        <View>
          <Text>Directions</Text>
          {recipe.directions.map(direction => {
            return <Text>{direction.step}</Text>
          })}
        </View>
        <Button title="Delete Recipe" onPress={() => this.onDeleteRecipe(recipe)}/>
      </View>
    )
  }
}

export default connect(null, {deleteRecipe})(RecipeDetailScreen)