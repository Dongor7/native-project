import React, { Component } from 'react';
import {View, Button} from 'react-native';

export default class Home extends Component {

    static navigationOptions = {
        title: 'Welcome',
    };

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button style={{ }} title={'Login'} onPress={() => navigate('Login')}/>
                <View style={{ margin: 10 }}/>
                <Button style={{  }} title={'Registration'} onPress={() => navigate('Registration')}/>
            </View>
        );
    }
}
