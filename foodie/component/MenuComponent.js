import React from 'react';
import {View, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';

function Menu(props) {

    const renderMenuItem = ({item, index}) => {
        return(
            <ListItem
                key={index}
                title={item.name}
                subtitle={item.description}
                hideChevron={true}
                leftAvater={{rounded:true, source: require('./images/buffet.png')}}
                onPress={() => props.onPress(item.id)}
            />
        )
    };

    return(
        <FlatList
            data={props.dishes}
            renderItem={renderMenuItem}
            keyEstractor={item=> item.id.toString()}/>
    )
}

export default Menu;