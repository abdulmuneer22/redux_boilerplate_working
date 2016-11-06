import React , {Component} from 'react'

import { connect} from 'react-redux'

import {
View,
Text
} from 'react-native'


class LibraryList extends Component{
    
    render(){
        
        return (
            <View>
            <Text>{this.props.libraries[0].title}</Text>
            <Text>{this.props.libraries[1].title}</Text>
            <Text>{this.props.libraries[2].title}</Text>
            <Text>{this.props.libraries[3].title}</Text>
            
            </View>
            
            )
    }

}

const mapStateToProps = state => {
    // map all the global state to props from redux store
    console.log(state)
    return { libraries : state.libraries }
    // libraries will be available for LibraryList component as props
}

export default connect(mapStateToProps)(LibraryList);