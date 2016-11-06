import React, {Component} from 'react'
import { View,Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore , combineReducers } from 'redux'


import reducers from './reducers'
import LibraryList from './components/LibraryList'
import Students from './components/Students'

// Step 1 - create reducer


class Root extends Component{

render(){
    return(
      <Provider store={createStore(reducers)}>
      <Students/>
      </Provider>


    );
}
} 


export default Root