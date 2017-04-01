import React, { Component } from 'react';
import { View  } from "react-native";
import ScrollableTabView from 'react-native-scrollable-tab-view';
import DefaultTabBar from './DefaultTabBar';
import BoxPanel from './BoxPanel';
import { MyButton } from './common';
import LibraryList from './LibraryList';
import LoginForm from './LoginForm';
import * as actions from '../actions';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { Actions, ActionConst } from 'react-native-router-flux';
import Header from './Header';

class Room extends Component {
    render() {
        const { container } = styles;

        return (
            <View style={ container }>
                <Header />
                <ScrollableTabView renderTabBar={ () => <DefaultTabBar/> } ref={(tabView) => { this.tabView = tabView; }}>
                    <LibraryList tabLabel='List' />
                    <BoxPanel tabLabel='Box'/>
                    <MyButton text="Logout"  tabLabel='Out' onPress={() => firebase.auth().signOut().then(() => {this.props.loginState(false); Actions.login({type: ActionConst.RESET});})} />
                </ScrollableTabView>
            </View>
        );
    }
}

const styles = {
    container: {
        backgroundColor: 'white',
        flex: 1
    }
};

//this.tabView.goToPage(0)
export default connect(null, actions)(Room);