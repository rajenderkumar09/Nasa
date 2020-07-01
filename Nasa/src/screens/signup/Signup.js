import React from 'react';
import { View } from 'react-native';
import { Container, Content, Text } from 'native-base';


export default class Signup extends React.Component {
    render() {
        return (
            <Container style={{flex:1}}>
                <Content>

                <View style={{backgroundColor:'red'}}>
                    <Text> 
                        { `Welcome to NASA, Please Signup here`}
                    </Text>
                </View>

                </Content>
            </Container>
        )
    }
}