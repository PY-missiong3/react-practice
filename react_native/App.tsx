import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyButton from './components/MyButton'

const App = () => {
  const handlePress = () => {
    Alert.alert('Button Clicked')
  }
  const handleSkip = () => {
    Alert.alert('Button Clicked')
  }
  return (
    <View style={styles.view}>

      <MyButton onPress={handlePress} title='Continue' bgVariant='secondary' textVariant='secondary' style={{ width: 200, borderRadius: 16, backgroundColor: 'red' }} />
      <MyButton onPress={handleSkip} title='Skip' textVariant='primary' style={styles.button3} />
      <MyButton onPress={handlePress} title='Verify' bgVariant='primary' textVariant='primary' />
      <MyButton onPress={handlePress} title='Send Code' bgVariant='outline' textVariant='success' />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button3: {
    borderRadius: 25,
    marginTop: 10,
    backgroundColor: 'cyan',
    width: 150
  },

})