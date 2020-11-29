import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 130,
    backgroundColor: 'white',
    borderRadius: 9,
    marginTop: 23,
    marginLeft: 5,
    elevation: 1,
  },
  header: {
    fontSize: 21,
    fontFamily: 'Roboto',
    color: '#323232',
    fontWeight: 'bold',
    marginTop: 16,
    marginLeft: 10,
  },
  text: {
    fontSize: 10,
    fontFamily: 'Roboto',
    color: '#999999',
    fontWeight: 'bold',
    marginTop: 6,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: '#C3FEDA',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  buttonContainer: {
    width: 160,
    height: 32,
    backgroundColor: 'white',
    borderRadius: 3,
    marginTop: 29,
    alignContent: 'space-around',
    justifyContent: 'center',
    marginLeft: 10,
    elevation: 0.5,
  },
});

export default styles;
