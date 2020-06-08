import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AddRecipeScreen from './screens/AddRecipeScreen';
import DiscoverRecipeScreen from './screens/DiscoverRecipeScreen';
import RecipeDetailScreen from './screens/RecipeDetailScreen';
import RecipeListScreen from './screens/RecipeListScreen';
import SplashScreen from './screens/SplashScreen';
import { Icon } from 'react-native-elements';
import { YellowBox } from 'react-native';

import { Provider } from 'react-redux';
import store from './redux/store';

const screenOptions = {
  headerStyle: {
    backgroundColor: 'green'
  },
  headerTintColor: 'white',
  headerTintStyle: {
    fontWeight: 'bold'
  }
};

export default class App extends React.Component {
  render() {
    YellowBox.ignoreWarnings([
      'VirtualizedLists should never be nested',
    ]);

    return (
      <Provider store={store}>
        <NavigationContainer>
          <AppStack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Splash" component={SplashScreen}/>
            <AppStack.Screen name="Main" component={MainTabScreen}/>
          </AppStack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
const AppStack = createStackNavigator();
const MyRecipeStack = createStackNavigator();
const DiscoverRecipeStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

function MainTabScreen() {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="My Recipes" component={MyRecipeStackScreen}/>
      <MainTab.Screen name="Discover Recipes" component={DiscoverRecipeStackScreen}/>
    </MainTab.Navigator>
  )
}

function MyRecipeStackScreen() {
  return (
    <MyRecipeStack.Navigator screenOptions={screenOptions}>
      <MyRecipeStack.Screen
        name="RecipeList"
        component={RecipeListScreen}
        options={({ navigation, route }) => ({
          headerTitle: 'My Recipes',
          headerRight: () => (
            <Icon name="add" color="white" onPress={() => navigation.navigate('AddRecipe')}/>
          )
        })}/>
      <MyRecipeStack.Screen
        name="RecipeDetail"
        component={RecipeDetailScreen}
        options={({ navigation, route }) => ({
          headerTitle: route.params.recipe.name,
          headerRight: () => (
            <Icon
              name="edit"
              color="white"
              onPress={() => navigation.navigate('AddRecipe', { recipe: route.params.recipe })}/>
          )
        })}/>
      <MyRecipeStack.Screen name="AddRecipe" component={AddRecipeScreen} options={{ title: 'Add New Recipe' }}/>
    </MyRecipeStack.Navigator>
  )
}

function DiscoverRecipeStackScreen() {
  return (
    <DiscoverRecipeStack.Navigator screenOptions={screenOptions}>
      <DiscoverRecipeStack.Screen name="DiscoverRecipes" component={DiscoverRecipeScreen}
                                  options={{ title: 'Discover Recipes' }}/>
    </DiscoverRecipeStack.Navigator>
  )
}
