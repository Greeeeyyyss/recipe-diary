import React from 'react';
import { Text, FlatList, StyleSheet, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { deleteRecipe } from "../redux/action";
import { connect } from 'react-redux';

class RecipeDetailScreen extends React.Component {

  onDeleteRecipe = recipe => {
    this.props.deleteRecipe(recipe);
    this.props.navigation.navigate('RecipeList')
  };

  render() {
    const recipe = this.props.route.params.recipe;
    return (
      <View>
        <View style={styles.header}>
          <Text>{recipe.name}</Text>
          <Icon name="star" color={recipe.isSaved ? 'orange' : 'black'}/>
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

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center'
  }
});

export default connect(null, { deleteRecipe })(RecipeDetailScreen)