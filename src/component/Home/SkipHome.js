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
import {useGetPokemonByNameQuery} from '../navigation/Api1';

const SkipHome = () => {
  const [userData, setUserData] = useState();
  const [isUser, setIsUser] = useState(true);
  const {data} = useGetPokemonByNameQuery(1, {skip: isUser});
  useEffect(() => {
    if (data) {
      setUserData(data);
    }
    console.log(data);
  }, [data]);

  return (
    <SafeAreaView>
      <Button title="fetch data" onPress={() => setIsUser(false)} />
      {userData &&
        userData.map(item => (
          <View>
            <Text>{item.title}</Text>
          </View>
        ))}
    </SafeAreaView>
  );
};

export default SkipHome;
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
