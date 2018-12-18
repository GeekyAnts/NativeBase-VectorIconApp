import React, { Component } from 'react';
// import Expo from "expo";
import { Container, Header, Content, Left, Body, Right, Button, Title, List, ListItem, Text } from 'native-base';
import IconList from './IconList';

export default class IconFamilyList extends Component {

  state = { loading: true }

  // async componentWillMount() {
  //     await Expo.Font.loadAsync({
  //         Roboto: require("native-base/Fonts/Roboto.ttf"),
  //         Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  //         Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
  //     });
  //     this.setState({ loading: false });
  // }

  render() {
    // if (this.state.loading) {
    //     return <Expo.AppLoading />;
    // }
    return (
      <Container>
        <Header>
          <Body><Title>Icon Families</Title></Body>
        </Header>
        <Content>
          <List>
            <ListItem onPress={() => this.props.navigation.navigate('IconList', { iconFamily: "AntDesign" })}>
              <Text>AntDesign</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('IconList', { iconFamily: "Entypo" })}>
              <Text>Entypo</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('IconList', { iconFamily: "EvilIcons" })}>
              <Text>EvilIcons</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('IconList', { iconFamily: "Feather" })}>
              <Text>Feather</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('IconList', { iconFamily: "FontAwesome" })}>
              <Text>FontAwesome</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('IconList', { iconFamily: "FontAwesome5" })}>
              <Text>FontAwesome5</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('IconList', { iconFamily: "Foundation" })}>
              <Text>Foundation</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('IconList', { iconFamily: "Ionicons" })}>
              <Text>Ionicons</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('IconList', { iconFamily: "MaterialIcons" })}>
              <Text>MaterialIcons</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('IconList', { iconFamily: "MaterialCommunityIcons" })}>
              <Text>MaterialCommunityIcons</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('IconList', { iconFamily: "Octicons" })}>
              <Text>Octicons</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('IconList', { iconFamily: "SimpleLineIcons" })}>
              <Text>SimpleLineIcons</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('IconList', { iconFamily: "Zocial" })}>
              <Text>Zocial</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}