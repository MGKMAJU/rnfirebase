 

import React, {Component} from 'react';

import firebase from "firebase";

import {Platform, StyleSheet, Text, View} from 'react-native';

 
export default class App extends Component {
    // Life cycle method to init the firebase
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyB_igHgA4NAOycx1Rk7TQM3yJebYKkTssc",
            authDomain: "rnappauthclass.firebaseapp.com",
            databaseURL: "https://rnappauthclass.firebaseio.com",
            projectId: "rnappauthclass",
            storageBucket: "rnappauthclass.appspot.com",
            messagingSenderId: "1087736175930"
        });
    }
  render() {
    return (
      <View  >
        <Text>A Firebase Integration Test Application</Text>
      </View>
    );
  }
}

 
