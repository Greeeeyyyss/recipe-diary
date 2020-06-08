import React from 'react';
import { StyleSheet, TextInput, View } from "react-native";
import { Icon } from "react-native-elements";

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
  }
});

export default SearchBar;