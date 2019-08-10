import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Home extends Component {
    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return (
            <View>
                <Text>
                    I wish this rain will stop, so as to enable me to go farm and prepare the arrival of my chics
                </Text>
            </View>
        )
    }
}


export default Home;