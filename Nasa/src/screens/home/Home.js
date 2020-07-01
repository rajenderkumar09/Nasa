import React from 'react';
import { View } from 'react-native';
import { Container, Content } from 'native-base';


export default class Home extends React.Component {
    render() {
        return (
            <Container style={{flex:1}}>
                <Content>

                <View style={{backgroundColor:'red'}}>
                    <Text> 
                        { `Welcome to NASA, This is Main Screen`}
                    </Text>
                </View>

                </Content>
            </Container>
        )
    }
}