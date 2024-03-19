import { Image } from 'native-base';
import { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { getArticalData } from '../../services/api';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

function Home({navigation}) {
  const [userData, setUserData] = useState();
  

  const fetchUsers = async () => {
    await getArticalData()
      .then(res => {
        console.log('res---', res.data.articles);
        setUserData(res.data.articles);
      })
      .catch(err => {
        console.log(err, 'err is here');
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(userData, 'userDatauserDatav');
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={{padding:5,borderWidth:1,borderColor:'black',margin:5}}
      onPress={()=>navigation.navigate('Details',{item:item})}>
        <Image style={styles.avtar} source={{ uri: item?.urlToImage }} resizeMode='cover' />
        <Text style={styles.title}>Author : {item.author}</Text>
        <Text style={styles.content} numberOfLines={4} >{item.content}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={userData}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
}
export default Home;

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
    width: width/2.5,
    fontSize:18,
    fontWeight:'800'
  },
  content: {
    marginHorizontal: 10,
    color: '#7E5936',
    width: width/2.5,
  },
  avtar: {
    height: width/2,
    width: width/2.5,
  },
});
