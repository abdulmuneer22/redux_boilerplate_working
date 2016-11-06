import React , {Component} from 'react'

import { connect} from 'react-redux'

import {
View,
Text
} from 'react-native'

import * as actions from '../actions'

class Students extends Component{
    render(){
        console.log(this.props)
        return(
            <View style={{marginTop : 50}}>
            <Text>{this.props.students[1].name}</Text>
            <Text>{this.props.libraries[1].title}</Text>
            <Text>Current Score : {this.props.currentScore}</Text>
      


            <Text
            onPress = {
                () => {this.props.scoreUpdater(1)}
            }
            >
            Call Score Updater
            </Text>
            </View>
            );
    }

}

const mapStateToProps = state => {
    // map all the global state to props from redux store
    //console.log(state)
    return { 
        students : state.students,
        libraries : state.libraries,
        currentScore : state.currentScore
     }
    // libraries will be available for LibraryList component as props
}



export default connect(mapStateToProps,actions)(Students);
