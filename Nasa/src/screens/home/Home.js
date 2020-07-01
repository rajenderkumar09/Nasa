import React from 'react';
import { View } from 'react-native';
import { Container, Content, Text, Body, Left, Right, ListItem } from 'native-base';
import styles from './styles';


export default class Home extends React.Component {
    constructor(props) {
        super(props)

        var astroid = this.props.route.params.astroid;
        this.state = {
            astroid:astroid || null
        }
    }

    render() {
        const {astroid} = this.state;
        return (
            <Container style={{flex:1}}>
                <Content>
                    <ListItem style={styles.itemStyle}>
                        <Left>
                            <Text style={styles.titleText}>{`Name: `}</Text>
                        </Left>
                        <Body>
                            <Right>
                                <Text style={styles.valueText}>{astroid.name}</Text>
                            </Right>
                        </Body>
                    </ListItem>
                    <ListItem style={styles.itemStyle}>
                        <Left>
                            <Text style={styles.titleText}>{`Nasa JPL URL: `}</Text>
                        </Left>
                        <Body>
                        <Right>
                            <Text style={styles.valueText}>{astroid.nasa_jpl_url}</Text>
                        </Right>
                        </Body>
                    </ListItem>
                    <ListItem style={styles.itemStyle}>
                        <Left>
                            <Text style={styles.titleText}>{`IS Potentially Hazardous Asteroid: `}</Text>
                        </Left>
                        <Body>
                            <Right>
                                <Text style={styles.valueText}>{astroid.is_potentially_hazardous_asteroid ? 'TRUE': 'FALSE'}</Text>
                            </Right>
                        </Body>
                    </ListItem>
                </Content>
            </Container>
        )
    }
}