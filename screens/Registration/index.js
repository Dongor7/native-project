import React, { Component } from 'react';
import {
    View,
    Text, TextInput, Button
} from 'react-native';

export default class Registration extends Component {

    state = {
        email: '',
        password: ''
    };

    static navigationOptions = {
        title: 'Registration',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={{padding: 20}}>
                <Text style={{ fontSize: 27 }}>
                    Registration
                </Text>
                <TextInput placeholder={'Email'}/>
                <TextInput placeholder={'Password'}/>
                <View style={{margin:7}} />
                <Button title={'Submit'} onPress={() => navigate('Content')}/>
            </View>
        )
    }

}
