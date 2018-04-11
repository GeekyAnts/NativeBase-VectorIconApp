import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native'
import { Container, Header, Content, View, Icon, Left, Button, Body, Right, Title, Text } from 'native-base';
import entypo from '../icon-list/Entypo';
import evilIcons from '../icon-list/EvilIcons';
import feather from '../icon-list/Feather';
import fontAwesome from '../icon-list/FontAwesome';
import foundation from '../icon-list/Foundation';
import ionicons from '../icon-list/Ionicons';
import materialCommunityIcons from '../icon-list/MaterialCommunityIcons';
import materialIcons from '../icon-list/MaterialIcons';
import octicons from '../icon-list/Octicons';
import simpleLineIcons from '../icon-list/SimpleLineIcons';
import zocial from '../icon-list/Zocial';

export default class IconList extends Component {

    state = {
        iconFamily: undefined
    }

    componentDidMount() {
        const { params } = this.props.navigation.state;
        let iconFamily = params.iconFamily;
        this.setState({ iconFamily })
    }

    getIconList(iconFamily) {
        switch (iconFamily) {
            case "Entypo": return entypo;
            case "EvilIcons": return evilIcons;
            case "Feather": return feather;
            case "FontAwesome": return fontAwesome;
            case "Foundation": return foundation;
            case "Ionicons": return ionicons;
            case "MaterialCommunityIcons": return materialCommunityIcons;
            case "MaterialIcons": return materialIcons;
            case "Octicons": return octicons;
            case "SimpleLineIcons": return simpleLineIcons;
            case "Zocial": return zocial;
            default: return ionicons;
        }
    }

    render() {
        const { params } = this.props.navigation.state;
        let iconFamily = params.iconFamily;
        let iconList = this.getIconList(iconFamily)
        return (
            <Container>
                <Header><Left>
                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                    <Body>
                        <Title>{this.state.iconFamily}</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <FlatList
                        data={iconList}
                        keyExtractor={(item, index) => String(index)}
                        renderItem={({ item }) => <View style={styles.item}>
                            <Text style={styles.text}>{item}</Text>
                            <Icon name={item} type={iconFamily} />
                        </View>}
                    />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 5,
        borderColor: 'grey',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        alignItems: 'center'
    },
    text: { marginRight: 15 }
})