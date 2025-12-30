import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SplashScreen } from './src/screens/common/splash';
import { Routes } from './src/navigation';

const App = () => {
  return (
    <Routes isLoggedIn={true} />
  )
}

export default App

const styles = StyleSheet.create({})