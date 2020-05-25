import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Button, Card, Icon, Text } from 'react-native-elements';
import { deleteRecipe } from "../redux/action";
import { connect } from 'react-redux';

class RecipeDetailScreen extends React.Component {

  onDeleteRecipe = recipe => {
    this.props.deleteRecipe(recipe);
    this.props.navigation.navigate('RecipeList')
  };

  renderIngredientItem = ({ item }) => <Text style={styles.item}>{item.name}</Text>;

  renderDirectionItem = ({ item }) => <Text style={styles.item}>{item.step}</Text>;

  render() {
    const recipe = this.props.route.params.recipe;
    return (
      <Card style={styles.container}>
        <View style={styles.ingredients}>
          <Text h4>Ingredients</Text>
          <FlatList
            renderItem={this.renderIngredientItem}
            data={recipe.ingredients}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.directions}>
          <Text h4>Directions</Text>
          <FlatList
            renderItem={this.renderDirectionItem}
            data={recipe.directions}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <Button title="Delete Recipe" type="outline" onPress={() => this.onDeleteRecipe(recipe)}/>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  ingredients: {
    marginBottom: 30
  },
  directions: {
    marginBottom: 30
  },
  item: {
    fontSize: 16,
    marginTop: 5
  }
});

export default connect(null, { deleteRecipe })(RecipeDetailScreen)