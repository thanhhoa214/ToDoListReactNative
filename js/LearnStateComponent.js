import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NavigationBar from 'react-native-navigation-bar';

export class LearnStateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowingText: true
        }
        setInterval(() => {
            this.setState(previousState => {
                this.isShowingText = !previousState.isShowingText;
            });
        }, 1000);
    }
    render() {
        alert("Quanh m gio ah!")
        if (!this.state.isShowingText)
            return null;
        return <Text>{this.props.text}</Text>
    }
}