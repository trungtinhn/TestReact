/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text,SafeAreaView ,View, TouchableOpacity, Image, FlatList } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OverView from './src/screens/Staff View/OverView';
import ViewShop1 from './src/screens/Staff View/ViewShop1';
import { Screen } from 'react-native-screens';

const Stack = createNativeStackNavigator();
export default function App (){
  return (
    <OverView/>
  )
}