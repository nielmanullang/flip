import { Container, Content, Header, Left, Right, View } from 'native-base';
import React from 'react';
import Toast from './../components/Toast';

class HomePageSrc extends React.Component {
  static navigationOptions = { header: null }
  state = {

  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Right />
        </Header>
        <Content>
          <View></View>
        </Content>
        <Toast ref="defaultToastBottom" position="bottom" />
      </Container>
    );
  }
}

export default HomePageSrc
