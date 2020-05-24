import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

const EmptyState = props => (
  <View style={styles.container}>
    <Icon name={props.iconName} color='green' size={150}/>
    <Text style={styles.message}>{props.message}</Text>
    <Button title={props.actionTitle} color="green" onPress={props.action}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20
  }
});

EmptyState.propTypes = {
  iconName: PropTypes.string,
  message: PropTypes.string,
  actionTitle: PropTypes.string,
  action: PropTypes.func
};

export default EmptyState;