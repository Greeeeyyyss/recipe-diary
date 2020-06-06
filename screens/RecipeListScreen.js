import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import RecipeItem from '../components/RecipeItem';
import EmptyState from "../components/EmptyState";
import { toggleSaveRecipe } from "../redux/action";

class RecipeListScreen extends React.Component {

  getDescription = (item) => {
    return item.ingredients.map(ingredient => {
      return ingredient.name
    }).join(', ');
  };

  onViewRecipe = (item) => {
    this.props.navigation.navigate('RecipeDetail', { recipe: item });
  };

  onToggleSaveRecipe = (item) => {
    this.props.toggleSaveRecipe(item);
  };

  renderItem = ({ item }) => (
    <RecipeItem
      name={item.name}
      isSaved={item.isSaved}
      description={this.getDescription(item)}
      onToggleSaveRecipe={() => this.onToggleSaveRecipe(item)}
      onViewRecipe={() => this.onViewRecipe(item)}
    />
  );


  render() {
    return (
      <View style={styles.container}>
        {
          this.props.recipes && this.props.recipes.length === 0 ? (
              <EmptyState
                iconName="star"
                message="Your recipes will appear here"
                actionTitle="Add Recipe"
                action={() => this.props.navigation.navigate('AddRecipe')}
              />
            ) :
            <FlatList
              renderItem={this.renderItem}
              data={this.props.recipes}
              keyExtractor={item => item.name}
            />
        }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  }
});

const mapStateToProps = state => ({
  recipes: state.recipes
});

export default connect(mapStateToProps, { toggleSaveRecipe })(RecipeListScreen)