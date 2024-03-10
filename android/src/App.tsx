import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import NewsData from '../ornekDatalar/news_data.json';
import NewsCard from './components/NewsCard/NewsCard';
import NewsBanner from '../ornekDatalar/news_banner_data.json';

function App() {
  //burada fonk çağırarak aşağıda her seferinde çağırmasını engelleyiro 1 kere çağırıp aşagıda kullanıyoruz peroformans için
  const renderNews = ({item}: {item: any}) => <NewsCard news={item}></NewsCard>;
  const keyExtractor = (item: {u_id: number}, index: number) =>
    item.u_id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.baslik_text}>FlatList ile verileri listele</Text>

      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal>
            {NewsBanner.map((item: any) => (
              <Image
                key={item.id}
                style={styles.banner_image}
                source={{uri: item.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        data={NewsData}
        keyExtractor={keyExtractor}
        renderItem={renderNews}></FlatList>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#e0e0e0'},
  baslik_text: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 1.5,
  },
});

export default App;
