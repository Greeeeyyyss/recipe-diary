import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

const PrimaryButton = props => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.title}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    height: 45,
    backgroundColor: 'green',
    marginStart: 15,
    marginEnd: 15,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

PrimaryButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func
};

export default PrimaryButton