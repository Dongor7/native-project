import React from 'react';

import {
    AsyncStorage,
    Button,
    StyleSheet,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default class RegistrationScreen extends React.Component {

    static navigationOptions = {
        title: 'Registration',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign up!" onPress={this._signInAsync} />
            </View>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };

}