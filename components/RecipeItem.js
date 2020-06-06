import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

const RecipeItem = props => (
  <Card>
    <View style={styles.container}>
      {
        props.thumbnail !== undefined &&
          <Image style={styles.image} source={props.thumbnail ? { uri: props.thumbnail } : null}/>
      }
      <TouchableOpacity style={styles.details} onPress={props.onViewRecipe}>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode='tail'>{props.name}</Text>
        <Text numberOfLines={1} ellipsizeMode='tail'>{props.description}</Text>
      </TouchableOpacity>
      {
        !props.href && <Icon name="star"
                                     color={props.isSaved ? 'orange' : 'gray'}
                                     style={styles.action}
                                     onPress={props.onToggleSaveRecipe} />
      }
    </View>
  </Card>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  details: {
    flex: 2,
    flexDirection: 'column'
  },
  image: {
    flex: 0.4,
    height: 50,
    width: 50,
    backgroundColor: '#ebebeb',
    marginEnd: 10
  },
  action: {
    flex: 1
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

RecipeItem.propTypes = {
  name: PropTypes.string,
  isSaved: PropTypes.bool,
  thumbnail: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
  onViewRecipe: PropTypes.func,
  onToggleSaveRecipe: PropTypes.func
};

export default RecipeItem