import React, {Component} from 'react';
import { Text} from 'react-native';
import {Card} from "react-native-elements";

function RenderContact() {
    return (
        <Card
            title="Contact Information">
            <Text style={{margin: 10}}>
                121, Clear Water Bay Road
                Clear Water Bay, Kowloon
                HONG KONG
                Tel: +852 1234 5678
                Fax: +852 8765 4321
                Email:confusion@food.net
            </Text>
        </Card>
    )
}

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us',
        headerStyle: {backgroundColor: "#512DA8"},
        headerTintColor: "#fff",
        headerTitleStyle: {color: "#fff"}
    };

    render() {
        return (
            <RenderContact/>
        )
    }
}

export default Contact;