import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { View } from 'react-native';
import { Container, Content, Card, CardItem, Button, Label } from 'native-base';


import {alert, getRequest} from '../../utils/Utils';
import { Constants } from '../../../Constants';
import styles from './styles';

export default class Signin extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            asteroidID:null,
        }
    }

    doLogin = () => {
        const {asteroidID} = this.state;

        let endPoint = `/neo/rest/v1/neo/${asteroidID}?api_key=${Constants.APIKey}`;
        getRequest(endPoint)
        .then(this.onLoginResponse.bind(this))
        .catch(this.onError)
    }
    
    onLoginResponse = (response) => {
        console.warn(response);
        alert(response);
    }
    
    onError() {
        alert(
            'Error',
            error.message,
            function () {
              this.setState({
                isLoading: false,
              });
            }.bind(this)
        );
    }

    onSubmit = () => {
        const {asteroidID} = this.state;
        if (asteroidID) {
            this.doLogin()
        } else {
            alert('Error', 'Please enter your Asteroid ID');
        }
    }

    render() {
        return (
            <Container style={{flex:1}}>
                <Content>
                <Card>
                    <Input style={styles.inputText} placeholder={`Enter Asteroid ID`} placeholderTextColor={'#A9A9A9'} onChangeText={text => this.setState({ asteroidID: text })} />
                    <Button onPress={this.onSubmit}>
                      <Text>{`Submit`}</Text>
                    </Button>
                </Card>
                </Content>
            </Container>
        )
    }
}