import React, {Component} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import {DISHES} from "../shared/dishes";
import {COMMENTS} from "../shared/comments";


function RenderDish(props) {
    const dish = props.dish;

    if (dish != null) {
        return (
            <Card
                featuredTitle={dish.name}
                image={require('../assets/images/buffet.png')}>
                <Text style={{margin: 10}}>
                    {dish.description}
                </Text>
                <Icon
                    raised
                    reverse
                    name={props.favorite ? 'heart': 'heart-o'}
                    type="font-awesome"
                    color="#f50"
                    onPress={() => props.favorite ? console.log('Fav already exist') : props.onPress()}
                />
            </Card>
        )
    } else {
        return (
            <View/>
        )
    }
}

function RenderComment(props) {
    let comments = props.comments;

    let renderComments = ({item, index}) => {
        return (
            <View key={index} style={{margin: 10}}>
                <Text style={{fontSize: 14}}> {item.comment} </Text>
                <Text style={{fontSize: 12}}> {item.rating + ' ' + 'Star'} </Text>
                <Text style={{fontSize: 12}}> {'---' + item.author + ', ' + item.date} </Text>
            </View>
        )
    };

    return (
        <Card title="Comments">
            <FlatList
                data={comments}
                renderItem={renderComments}
                keyExtractor={(item) => item.id.toString()}
            />
        </Card>
    )

}

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            favorites: []
        }
    }

    makeFavorite(dishId) {
        this.setState({
            favorites: this.state.favorites.concat(dishId)
        })
    };

    static navigationOptions = {
        title: 'Dish Details',
        headerStyle: {backgroundColor: "#512DA8"},
        headerTintColor: "#fff",
        headerTitleStyle: {color: "#fff"}
    };

    render() {

        const dishId = this.props.navigation.getParam('dishId', '');

        return (
            <ScrollView>
                <RenderDish dish={this.state.dishes[+dishId]}
                            favorite={this.state.favorites.some(fav =>fav === dishId)}
                            onPress={() =>this.makeFavorite(dishId)}/>
                <RenderComment comments={this.state.comments.filter((comment) => comment.dishId === dishId)}/>

            </ScrollView>
        )
    }

}

export default DishDetail;