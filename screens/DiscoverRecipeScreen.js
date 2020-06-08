import React from 'react';
import { Alert, Linking, Text, TouchableOpacity, FlatList, StyleSheet, View } from 'react-native';
import RecipeItem from '../components/RecipeItem';
import { searchRecipe } from "../api";
import EmptyState from '../components/EmptyState';
import SearchBar from "../components/SearchBar";

const LIMIT = 10;

export default class DiscoverRecipeScreen extends React.Component {
  state = {
    recipes: [],
    hasMoreData: false,
    searchKey: null,
    page: 1
  };

  onSearchChange = (text) => {
    this.setState({ searchKey: text });
  };

  searchRecipes = async () => {
    const recipes = await searchRecipe(this.state.searchKey, this.state.page);
    this.setState(prevState => ({
      recipes: [...prevState.recipes, ...recipes],
      hasMoreData: recipes.length <= LIMIT
    }));
  };

  loadMoreRecipe = async () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }), this.searchRecipes);
  };

  onTapSearch = () => {
    this.searchRecipes();
  };

  onViewRecipe = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Error', 'Unable to view recipe. Please enable a browser to proceed.');
    }
  };

  renderItem = ({ item }) => (
    <RecipeItem
      name={item.title}
      description={item.ingredients}
      thumbnail={item.thumbnail}
      href={item.href}
      onViewRecipe={() => this.onViewRecipe(item.href)}
    />
  );

  renderFooter = () => {
    return (
      <View style={styles.searchFooter}>
        {this.state.hasMoreData &&
        <TouchableOpacity onPress={() => this.loadMoreRecipe()}>
          <Text style={styles.loadMore}>Load More</Text>
        </TouchableOpacity>
        }
      </View>
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          searchKey={this.state.searchKey}
          onSearchChange={this.onSearchChange}
          onTapSearch={() => this.onTapSearch()}
        />
        {
          this.state.recipes.length === 0 ?
            (
              <EmptyState
                message="Browse recipes all over the world"
                iconName="restaurant"
              />
            )
            : (
              <FlatList
                style={styles.searchList}
                data={this.state.recipes}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={this.renderFooter}
              />
            )
        }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchList: {
    flex: 0.90,
    marginBottom: 10
  },
  searchFooter: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  loadMore: {
    textAlign: 'center',
    color: 'green'
  }
});