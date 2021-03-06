import React, {Component} from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {DISHES} from "../shared/dishes";
import {PROMOTIONS} from "../shared/promotions";
import {LEADERS} from "../shared/leaders";
import {Card} from "react-native-elements";

function RenderItem(props) {
    const item = props.item;

    if (item != null) {
        return (
           <Card
               featuredTitle={item.name}
               featuredSubtitle={item.designation}
               image={require('../assets/images/elaicheesecake.png')}>
               <Text style={{margin: 10}}>
                   {item.description}
               </Text>
           </Card>
        );
    } else {
        return (
            <View/>
        )
    }
}
class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }

    static navigationOptions = {
        title: 'Home',
        headerStyle: {backgroundColor: "#512DA8"},
        headerTintColor: "#fff",
        headerTitleStyle: {color: "#fff"}
    };

    render() {
        return (
            <ScrollView>
                <RenderItem item={this.state.dishes.filter((dish) => dish.featured)[0]}/>
                <RenderItem item={this.state.promotions.filter((promo) => promo.featured)[0]}/>
                <RenderItem item={this.state.leaders.filter((leader) => leader.featured)[0]}/>
            </ScrollView>
        )
    }
}


export default Home;