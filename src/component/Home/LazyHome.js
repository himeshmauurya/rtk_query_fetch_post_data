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
  import React, {useEffect, useState} from 'react';
  import {
    useLazyGetPokemonByNameQuery,
   
  } from '../navigation/LazyApi';
  
  const LazyHome = () => {
    
    const [getUsers, results] = useLazyGetPokemonByNameQuery();
   const [data,setdata]=useState([])

 
    //console.log("lk",results.status)
    useEffect(() => {
      if(results && results.data) {
        setdata(results.data)
       console.log(results.isSuccess)
      }else{
        console.log(results.isSuccess)
      }
      
    },[results])
  
  
    return (
        <SafeAreaView>
         
          <Button title="fetch data" onPress={()=>{
          getUsers()
          }} />
         {results.status=="fulfilled"? <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={styles.itemContainer}>
                <Text>id: {item.id}</Text>
                <Text>name: {item.title}</Text>
              </View>
            )}
          />:<Text>Fetch Your Api</Text>}
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
  