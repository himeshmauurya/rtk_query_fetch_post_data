import {
  View,
  Text,
  Button,
  Alert,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  useGetPokemonByNameQuery,
  useCreateUserMutation,
} from '../navigation/Api1';

const Home = () => {
 const {data, isLoading} = useGetPokemonByNameQuery();
 
  const [updatePost, result] = useCreateUserMutation();
  console.log(updatePost)
  if (isLoading) {
    return <ActivityIndicator />;
  }
 
  function createpost() {
    const postedData={ title: 'test product',
    price: 13.57,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',}
    updatePost(postedData).then(res => {
      console.log(res);
      Alert.alert(JSON.stringify(res.data))
    });
  }

  return (
      <SafeAreaView>
        <Button title="post data" onPress={createpost} />
       
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <Text>id: {item.id}</Text>
              <Text>name: {item.title}</Text>
            </View>
          )}
        />
      </SafeAreaView>

  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 5,
    paddingHorizontal: 18,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    gap: 2,
  },
});
