import React from 'react';
import {View, Text, TouchableOpacity, Alert, Image} from 'react-native';
import {styles} from './NewsCard.style';
const NewsCard = ({news}: {news: any}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.images} source={{uri:news.imageUrl}}></Image>
            <View style={styles.inner_container}></View>
            <Text style={styles.title}>{news.title}</Text>
            <Text style={styles.text}>{news.description}</Text>
            <Text style={styles.tarih}>{news.author}</Text>
            <TouchableOpacity
                style={styles.button_container}
                onPress={() => Alert.alert('Button pressed')}>
                <Text style={styles.button_text}>Detay</Text>
            </TouchableOpacity>
        </View>
    );
};
export default NewsCard;
