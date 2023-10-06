import { View, Text } from 'react-native'
import React from 'react'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { pokemonApi } from './src/component/navigation/Api1';
import Home from './src/component/Home/Home';

//Lazy
// import { pokemonApi } from './src/component/navigation/LazyApi';
//  import LazyHome from './src/component/Home/LazyHome';


const App = () => {
  return (
    <ApiProvider api={pokemonApi}>
        {/* <LazyHome/> */}
        <Home/> 
    </ApiProvider>
  )
}

export default App