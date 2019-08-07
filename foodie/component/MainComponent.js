import React, {Component} from 'react';
import {DISHES} from "../shared/dishes";
import Menu from './MenuComponent';
import DishDetail from "./DishDetailComponent";
import {View} from 'react-native';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            dishSelected: null
        };
    }

    onSelectDish (dishId) {
        this.setState({dishSelected: dishId})
    };


    render() {
        return (
            <View>
                <Menu dishes={this.state.dishes}
                      onPress={(dishId) => this.onSelectDish(dishId)}/>
                <DishDetail dishes={this.state.dishes.filter((dish) => dish.id === this.state.dishSelected)[0]}/>
            </View>
        )
    }
}

export default Main;