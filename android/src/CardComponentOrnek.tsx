import React from 'react';
import {
  SafeAreaView,  StyleSheet,
} from 'react-native';
import Card from './components/Card';

function App() {
  function showAlert() {
    console.log('Button Clicked');
  }

  return (
    <SafeAreaView style={styles2.container}>
   <Card title="Ahmet" text='Erkan Anaktarlar koltuğun altında kalık beni ara'></Card>
   <Card title="Mehmet" text='Mesajınız anlaşılmadı'></Card>
    </SafeAreaView>
  );
}
const styles2 = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#e0e0e0'},
});

export default App;
