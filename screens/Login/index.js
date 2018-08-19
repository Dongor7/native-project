import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Button
} from 'react-native';

export default class Login extends Component {

    state = {
        email: '',
        password: ''
    };

    static navigationOptions = {
        title: 'Login',
    };

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={{padding: 20}}>
                <Text style={{ fontSize: 27 }}>
                    Login
                </Text>
                <TextInput placeholder={'Email'}/>
                <TextInput placeholder={'Password'}/>
                <View style={{margin:7}} />
                <Button title={'Submit'} onPress={() => navigate('Content')}/>
            </View>
        )
    }

}

