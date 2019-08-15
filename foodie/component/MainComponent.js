import React from 'react';
import Menu from './MenuComponent';
import DishDetail from "./DishDetailComponent";
import Home from "./HomeComponent";
import {
    createStackNavigator, createAppContainer, createDrawerNavigator,
    DrawerItems, SafeAreaView
} from 'react-navigation';
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import {View, Text, Image, ScrollView, StyleSheet, Animated} from "react-native";
import {Icon} from "react-native-elements";


const MenuNavigator = createStackNavigator({
        Menu: {
            screen: Menu,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon name="menu" size={24}
                                  color="#fff"
                                  onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        DishDetail: {screen: DishDetail}
    },
    {
        initialRouteName: 'Menu',
    });

const HomeNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Icon name="menu" size={24}
                              color="#fff"
                              onPress={() => navigation.toggleDrawer()}
            />
        })
    }
});

const ContactNavigator = createStackNavigator({
    Contact: {
        screen: Contact,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Icon name="menu" size={24}
                              color="#fff"
                              onPress={() => navigation.toggleDrawer()}
            />
        })
    }
});

const AboutNavigator = createStackNavigator({
    About: {
        screen: About,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Icon name="menu" size={24}
                              color="#fff"
                              onPress={() => navigation.toggleDrawer()}
            />
        })
    }
});

const CustomDrawerContentComponent = (props) => {
    const translateX = props.drawerOpenProgress.interpolate({
        inputRange: [0, 1],
        outputRange: [-100, 0],
    });

    return <Animated.View style={{transform: [{translateX}]}}>{
        /* ... drawer contents */
        <ScrollView>
            <SafeAreaView style={styles.container} forceInset={{top: 'always', horizontal: 'never'}}>
                <View style={styles.drawerHeader}>
                    <View style={{flex: 1}}>
                        <Image source={require('../assets/images/logo.png')} style={styles.drawerImage}/>
                    </View>
                    <View style={{flex: 2}}>
                        <Text style={styles.drawerHeaderText}>
                            Ristorante Con Fusion
                        </Text>
                    </View>
                </View>
                <DrawerItems {...props}/>
            </SafeAreaView>
        </ScrollView>

    }</Animated.View>;
};


const MainNavigator = createDrawerNavigator({
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                title: 'Home',
                drawerLabel: 'Home',
                drawerIcon: ({tintColor, focused}) => (
                    <Icon
                        name="home"
                        type="font-awesome"
                        size={24}
                        color={tintColor}
                    />
                ),
            }
        },
        Menu: {
            screen: MenuNavigator,
            navigationOptions: {
                title: 'Menu',
                drawerLabel: 'Menu',
                drawerIcon: ({tintColor, focused}) => (
                    <Icon
                        name="list"
                        type="font-awesome"
                        size={24}
                        color={tintColor}
                    />
                ),
            }
        },
        Contact: {
            screen: ContactNavigator,
            navigationOptions: {
                title: 'Contact',
                drawerLabel: 'Contact',
                drawerIcon: ({tintColor, focused}) => (
                    <Icon
                        name="address-card"
                        type="font-awesome"
                        size={24}
                        color={tintColor}
                    />
                ),
            }
        },
        About: {
            screen: AboutNavigator,
            navigationOptions: {
                title: 'About',
                drawerLabel: 'About',
                drawerIcon: ({tintColor, focused}) => (
                    <Icon
                        name="info-circle"
                        type="font-awesome"
                        size={24}
                        color={tintColor}
                    />
                ),
            }
        }
    },
    {
        drawerBackgroundColor: "#D1C4E9",
        contentComponent: CustomDrawerContentComponent
    });

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: "#512DA8",
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 80
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    }
});


const Main = createAppContainer(MainNavigator);

export default Main;