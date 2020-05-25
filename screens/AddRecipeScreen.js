import React from 'react';
import { TextInput, FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { Card, Icon, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { addRecipe, updateRecipe } from "../redux/action";
import PrimaryButton from '../components/PrimaryButton';

class AddDetailScreen extends React.Component {
  constructor(props) {
    super(props);

    if (props.route.params && props.route.params.recipe) {
      this.recipe = props.route.params.recipe;
      this.state = { ...this.recipe };
    } else {
      this.state = {
        name: '',
        ingredients: [],
        directions: []
      };
    }
  }

  onSaveRecipe = () => {
    if (this.recipe) {
      this.props.updateRecipe({
        currentRecipe: this.recipe,
        updatedRecipe: this.state
      });
      this.props.navigation.navigate('RecipeDetail', { recipe: this.state });
    } else {
      this.props.addRecipe(this.state);
      this.props.navigation.navigate('RecipeList');
    }
  };

  onNameChange = (name) => {
    this.setState({ name });
  };

  onIngredientItemChange = (name, index) => {
    this.setState(prevState => ({
      ingredients: prevState.ingredients.map((ingredient, idx) => {
        if (idx === index) {
          return { name };
        }
        return ingredient;
      })
    }));
  };

  onDirectionItemChange = (step, index) => {
    this.setState(prevState => ({
      directions: prevState.directions.map((direction, idx) => {
        if (idx === index) {
          return { step };
        }
        return direction;
      })
    }));
  };

  onAddItem = (type) => {
    if (type === 'ingredient') {
      this.setState(prevState => ({
        ingredients: [...prevState.ingredients, { name: '' }]
      }));
    } else {
      this.setState(prevState => ({
        directions: [...prevState.directions, { step: '' }]
      }));
    }
  };

  onDeleteItem = (item, index, type) => {
    if (type === 'ingredient') {
      this.setState(prevState => ({
        ingredients: prevState.ingredients.filter((_, idx) => idx !== index)
      }))
    } else {
      this.setState(prevState => ({
        directions: prevState.directions.filter((_, idx) => idx !== index)
      }))
    }
  };

  renderIngredientItem = ({ item, index }) => (
    <Item
      value={item.name}
      index={index}
      onDeleteItem={() => this.onDeleteItem(item, index, 'ingredient')}
      onChangeText={this.onIngredientItemChange}
    />
  );

  renderDirectionItem = ({ item, index }) => (
    <Item
      value={item.step}
      index={index}
      onDeleteItem={() => this.onDeleteItem(item, index, 'direction')}
      onChangeText={this.onDirectionItemChange}
    />
  );

  render() {
    return (
      <ScrollView style={styles.container}>
        <Card>
          <Text h4>Recipe</Text>
          <TextInput style={styles.itemBox} value={this.state.name} placeholder="Name"
                     onChangeText={(text) => this.onNameChange(text)}/>
        </Card>
        <ItemList
          title="Ingredients"
          items={this.state.ingredients}
          renderItem={this.renderIngredientItem}
          onAddItem={() => this.onAddItem('ingredient')}
        />
        <ItemList
          title="Directions"
          items={this.state.directions}
          renderItem={this.renderDirectionItem}
          onAddItem={() => this.onAddItem('direction')}
        />
        <PrimaryButton title="Save Recipe" onPress={() => this.onSaveRecipe()}/>
      </ScrollView>
    )
  }
}

const Item = props => (
  <View style={styles.item}>
    <TextInput style={styles.itemBox} value={props.value}
               onChangeText={(text) => props.onChangeText(text, props.index)}/>
    <Icon name="delete" color="gray" onPress={props.onDeleteItem} size={30}/>
  </View>
);

const ItemList = props => (
  <Card>
    <View style={styles.item}>
      <Text h4>{props.title}</Text>
      <Icon name="add" color="green" onPress={props.onAddItem} size={30}/>
    </View>
    <FlatList
      nestedScrollEnabled={false}
      renderItem={props.renderItem}
      data={props.items}
      keyExtractor={(item, index) => index.toString()}
    />
  </Card>
);

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemBox: {
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    flex: 0.95,
    fontSize: 16
  }
});

export default connect(null, { addRecipe, updateRecipe })(AddDetailScreen)