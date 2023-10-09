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
  import {useLazyGetPokemonByNameQuery,useLazyGetProductByNameQuery} from '../navigation/Lazytwoapi';
  
  const LazyTwoapiCall = () => {
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
  
    const [getUsers1, results1] = useLazyGetProductByNameQuery();
    const [data1, setdata1] = useState([]);
    const [isLoading1, setIsLoading1] = useState(false);
    const handleFetchData1 =() => {
      setIsLoading1(true);
      getUsers1()
        .unwrap()
        .then(response => {
          setIsLoading1(false);
        //   console.log(response.products)
          setdata1(response.products);
  
        });
    };
  
  
    return (
      <SafeAreaView>
        <Button title="Api1 CALL" onPress={handleFetchData} />
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

<Button title="Api2 CALL" onPress={handleFetchData1} />
        {isLoading1 ? (
          <ActivityIndicator size="large" color="black" />
        ) : results1.status === 'fulfilled' ? (
          <FlatList
            data={data1}
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
  
  export default LazyTwoapiCall;
  
  
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
  