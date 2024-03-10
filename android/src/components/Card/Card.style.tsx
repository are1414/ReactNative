import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({ 
    container: {
      backgroundColor: 'white',
      borderColor: 'gray',
      borderWidth: 1,
      margin: 10,
      borderRadius: 5,
    },
    body: { padding: 10, margin: 10, borderRadius: 5},
    title: {fontSize: 20, fontWeight: 'bold', color: 'black'},
    text: {fontSize: 16, color: 'black', marginTop: 10},
    button_container: {
      backgroundColor: '#00C2FF',
      padding: 10,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      alignItems: 'center',
    },
    button_text: {fontSize: 16, color: 'white', fontWeight: 'bold'},

 })