import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

const RecipeItem = props => (
  <View style={styles.container}>
    {
      props.recipe.thumbnail && <Image style={styles.image} source={props.recipe.thumbnail}/>
    }
    <TouchableOpacity style={styles.details} onPress={props.onViewRecipe}>
      <Text style={styles.name} numberOfLines={1} ellipsizeMode='tail'>{props.recipe.name}</Text>
      <Text numberOfLines={1} ellipsizeMode='tail'>{props.description}</Text>
    </TouchableOpacity>
    <Icon name="star"
          color={props.recipe.isSaved ? 'orange' : 'gray'}
          style={styles.action}
          onPress={props.onToggleSaveRecipe}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  details: {
    flex: 2,
    flexDirection: 'column'
  },
  image: {
    flex: 1
  },
  action: {
    flex: 1
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

RecipeItem.propTypes = {
  recipe: PropTypes.object,
  description: PropTypes.string,
  onViewRecipe: PropTypes.func,
  onToggleSaveRecipe: PropTypes.func
};

export default RecipeItem