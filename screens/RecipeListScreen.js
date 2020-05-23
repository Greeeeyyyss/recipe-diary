import React from 'react';
import {Text, FlatList, StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';

class RecipeListScreen extends React.Component {

  renderItem = ({item}) => (
    <View>
      <View>
        <Text>item.name</Text>
        <Text>item.description</Text>
      </View>
      <Icon name="star" color={item.isSaved ? 'orange' : 'black'}/>
    </View>
  )

  render() {
    return (
      <View>
        <FlatList
          renderItem={this.renderItem}
          data={this.props.recipes}
          keyExtractor={item => item.name}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  }
})

const mapStateToProps = state => ({
  recipes: state.recipes
})

export default connect(mapStateToProps)(RecipeListScreen)