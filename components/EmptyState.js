import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import PrimaryButton from './PrimaryButton';

const EmptyState = props => (
  <View style={styles.container}>
    <Icon name={props.iconName} color='green' size={150}/>
    <Text style={styles.message}>{props.message}</Text>
    <PrimaryButton title={props.actionTitle} onPress={props.action}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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