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
import React, {useState} from 'react';
import {useLazyGetPokemonByNameQuery} from '../navigation/LazyApi';

const LazyHome = () => {
  const [getUsers, results] = useLazyGetPokemonByNameQuery();
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchData =() => {
    setIsLoading(true);
    getUsers()
      .unwrap()
      .then(response => {
        setIsLoading(false);
        setdata(response);

      });
  };


  return (
    <SafeAreaView>
      <Button title="Fetch data" onPress={handleFetchData} />
      {isLoading ? (
        <ActivityIndicator size="large" color="black" />
      ) : results.status === 'fulfilled' ? (
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
      ) : (
        <Text>Fetch Your Api</Text>
      )}
    </SafeAreaView>
  );
};

export default LazyHome;


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
