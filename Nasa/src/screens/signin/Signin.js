import React from 'react';

import { Keyboard } from 'react-native';
import { Container, Content, Form, Item, Label, Card, CardItem, Body, Text, Input, Button } from 'native-base';

import { get } from '../../api/Service';
import {alert} from '../../utils/Utils';

import {apiConfig} from '../../configs/config';
import styles from './styles';
import Loader from '../../components/Loader';

export default class Signin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            asteroidID:null,
            isLoading:false
        }
        this.fetchAstroidDetails = this.fetchAstroidDetails.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onRandom = this.onRandom.bind(this)
        this.onError = this.onError.bind(this)
        this.onDetailResponse = this.onDetailResponse.bind(this)
        this.onRandomResponse = this.onRandomResponse.bind(this)
        this.openHome = this.openHome.bind(this)
    }

    fetchAstroidDetails = (asteroidID) => {
        let endPoint = `${asteroidID}?api_key=${apiConfig.key}`;
        get(endPoint)
        .then(this.onDetailResponse)
        .catch(this.onError)
    }
    
    onDetailResponse = (response) => {
        this.setState({ isLoading: false });
        this.openHome(response);
    }
    
    openHome = (response) => {
        this.props.navigation.navigate('Home', {
            astroid:response
        });
    }

    onRandomResponse = (response) => {
        var items = response.near_earth_objects
        var item = items[Math.floor(Math.random() * items.length)];
        this.fetchAstroidDetails(item.id);
    }

    onSubmit = () => {
        
        //Dismiss Keyboard
        Keyboard.dismiss

        this.setState({ isLoading: true });

        const {asteroidID} = this.state;
        if (asteroidID.trim()) {
            this.fetchAstroidDetails(asteroidID)
        } else {
            alert('Error', 'Please enter your Asteroid ID');
        }
    }

    onRandom = () => {
        
        this.setState({isLoading:true});
        const {asteroidID} = this.state;
        let endPoint = `browse?api_key=${apiConfig.key}`;
        get(endPoint)
        .then(this.onRandomResponse)
        .catch(this.onError)
    }

    onError = (error) => {
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

    render() {
        const { isLoading } = this.state;
        return (
            <Container style={{flex:1}}>
                <Loader loading={isLoading} />
                <Content transparent>
                <Form>
                    <Item floatingLabel placeholder={`Select`}>
                        <Label style={styles.labelText}>
                        {`Enter Asteroid ID`}
                        </Label>
                        <Input style={styles.inputText} placeholder={`Enter Asteroid ID`} keyboardType='numeric' placeholderTextColor={'#A9A9A9'} onChangeText={ text => this.setState({ asteroidID: text })} />
                    </Item>
                </Form>
                <Card transparent>
                    <CardItem>
                        <Body style={{flexDirection:'row', justifyContent:'space-around'}}>
                            <Button disabled={!this.state.asteroidID} bordered style={[styles.button, styles.disable]} onPress={this.onSubmit}>
                                <Text style={[styles.buttonText, {color:this.state.asteroidID ? 'black' : 'gray'}]}>{`Submit`}</Text>
                            </Button>
                            <Button bordered style={styles.button} onPress={this.onRandom}>
                                <Text style={styles.buttonText}>{`Random Asteroid`}</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
                </Content>
            </Container>
        )
    }
}