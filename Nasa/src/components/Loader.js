import React from 'react';
import { StyleSheet, View, Modal, ActivityIndicator, Text, Platform } from 'react-native';

const Loader = props => {
  const { loading, text, ...attributes } = props;
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {
        console.log('close modal');
      }}
    >
      <View style={attributes.style || styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={loading} />
          {text && <Text style={styles.textStyle}>{text}</Text>}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    padding: 8,
    color: 'black',
    textAlign: 'center',
    fontSize: 12,
    ...Platform.select({
      ios: { fontWeight: '500'},
      android: { fontFamily: 'SF-Pro-Display-Medium' }
    })
  }
});

export default Loader;
