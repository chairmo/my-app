import React, {Component} from 'react';
import {View, FlatList, Image} from 'react-native';
import {ListItem} from 'react-native-elements';
import {DISHES} from "../shared/dishes";

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES
        }
    }

    static navigationOptions = {
        title: "Menu"
    };

    render() {
        const {navigate} = this.props.navigation;

        const renderMenuItem = ({item, index}) => {
            return (
                <ListItem
                    leftAvater={{
                        title: item.name[0],
                        source: {uri: '../assets/images/alberto.png'},
                        showEditButton: true
                    }

                    }
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    chevron
                    onPress={() => navigate('DishDetail', {dishId: item.id})}
                />
            )
        };

        return (
            <FlatList
                data={this.state.dishes}
                renderItem={renderMenuItem}
                keyExtractor={(item) => item.id.toString()}/>
        )
    }
}

export default Menu;