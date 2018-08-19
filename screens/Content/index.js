import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

export default class Content extends Component {

    static navigationOptions = {
        title: 'Content',
    };

    render() {
        return (
            <Text>
                Content
            </Text>
        )
    }

}
