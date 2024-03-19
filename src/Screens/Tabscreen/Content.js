import {StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/action/action';

function Content({navigation}) {
  const dispatch = useDispatch()
  const login = useSelector(state=>state.login)
  console.log('profile--',login);
  return (
    <View style={styles.container}>
        {/* <Image style={styles.avtar} source={{ uri: item?.urlToImage }} resizeMode='cover' /> */}
        <Text style={styles.title}>Full Name : {login.firstName}{login.lastName}</Text>
        <Text style={styles.content}>Email : {login.email}</Text>
        <View style={{bottom:30,position:'absolute'}}>
          <TouchableOpacity style={{backgroundColor:'blue',
          paddingHorizontal:30,borderRadius:5,paddingVertical:10}}
          onPress={()=>{
            dispatch(loginUser({}))
            navigation.navigate('signin')
          }}>
            <Text style={{color:'white',fontSize:13}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}
export default Content;

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
    fontSize:18,
    fontWeight:'800'
  },
  content: {
    marginHorizontal: 10,
    color: '#7E5936',
  },
  avtar: {
    height: 200,
    width: 200,
  },
});
