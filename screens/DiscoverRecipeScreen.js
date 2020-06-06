import React from 'react';
import { Alert, Linking, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import RecipeItem from '../components/RecipeItem';
import { searchRecipe } from "../api";
import EmptyState from '../components/EmptyState';

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

const SearchBar = props => (
  <View style={styles.searchBar}>
    <TextInput
      style={styles.searchBox}
      value={props.searchKey}
      placeholder="Search here..."
      onChangeText={(text) => props.onSearchChange(text)}/>
    <Icon name="search" color="gray" onPress={props.onTapSearch}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  searchBox: {
    flex: 0.99,
    height: 45,
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'green'
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