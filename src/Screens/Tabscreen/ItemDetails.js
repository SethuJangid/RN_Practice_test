import { Image } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const ItemDetails = ({ route }) => {
    const {item} = route.params
    console.log('item---',item);
    return (
      <View style={{padding:5,margin:5}}>
        <Image style={styles.avtar} source={{ uri: item?.urlToImage }} resizeMode='cover' />
        <Text style={styles.title}>Author : {item.author}</Text>
        <Text style={styles.content} >{item.content}</Text>
      </View>
    );
  };

  export default ItemDetails


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5DCBA',
    },
    title: {
      marginHorizontal: 10,
      color: '#000000',
      width: width/0.5,
      fontSize:18,
      fontWeight:'800'
    },
    content: {
      marginHorizontal: 10,
      color: '#7E5936',
      width: width/1.1,
    },
    avtar: {
      height: width,
      width: width/0.5,
    },
  });