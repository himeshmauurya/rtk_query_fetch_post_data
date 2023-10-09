import { View, Text } from 'react-native'
import React from 'react'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
// import { pokemonApi } from './src/component/navigation/Api1';
// import Home from './src/component/Home/Home';

//Lazy
// import { pokemonApi } from './src/component/navigation/LazyApi';
// import LazyHome from './src/component/Home/LazyHome';

//skip
// import SkipHome from './src/component/Home/SkipHome';

//twoapi call
import { pokemonApi } from './src/component/navigation/Lazytwoapi';
import LazyTwoapiCall from './src/component/Home/LazyTwoapiCall';
const App = () => {
  console.log("object")
  return (
    <>
    
     <ApiProvider api={pokemonApi}>
      <LazyTwoapiCall/>
      {/* <LazyHome/> */}
        {/* <Home/>  */}
        {/* <SkipHome/> */}
  </ApiProvider>
    </>
  )
}

export default App