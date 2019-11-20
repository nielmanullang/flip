import {Container, Content, Header, Icon, Input, View} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';
import {
  convertToUpperCase,
  ObjectLength,
} from './../../native-base-theme/variables/convert';
import ListTransaksi from './../components/List/Transaksi';
import Loading from './../components/Modal/Loading';
import Toast from './../components/Toast';
import {apiCall, getAsyncStoreSave} from './../services/commonAction';
import endPoint from './../services/endPoint';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

class HomePageSrc extends React.Component {
  static navigationOptions = {header: null};
  state = {
    isLoading: true,
    listData: {},
  };

  componentDidMount = () => {
    this.getListData();
  };

  getListData = () => {
    const api = endPoint.frontendTest;
    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    apiCall.get(api, header, this.responeListData);
  };

  responeListData = callback => {
    if (callback != null && callback.status === 200) {
      let listData = callback.data;
      Object.keys(listData).map(function(key) {
        listData[key].search = true;
      });
      getAsyncStoreSave(
        'listData',
        listData,
        this.setState({listData, isLoading: false}),
      );
    }
  };

  _filterListData = text => {
    let listData = this.state.listData;
    if (ObjectLength(text) === 0) {
      Object.keys(listData).map(function(key) {
        listData[key].search = true;
      });
    } else {
      Object.keys(listData).map(function(key) {
        if (
          convertToUpperCase(listData[key].beneficiary_name).includes(
            convertToUpperCase(text),
          )
        ) {
          listData[key].search = true;
        } else {
          listData[key].search = false;
        }
      });
    }
    this.setState({listData});
  };

  render() {
    let listData = this.state.listData;
    return (
      <Container>
        <Header>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 5,
              width: WIDTH * 0.95,
              height: HEIGHT * 0.05,
              alignItems: 'center',
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              name="search"
              style={{fontSize: 15, color: '#B6B6B6', marginLeft: 10}}
            />
            <Input
              style={{fontSize: 15}}
              placeholder="Cari Berdasarkan Nama Penerima"
              placeholderTextColor="#B6B6B6"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              keyboardType="default"
              selectionColor="#B6B6B6"
              onChangeText={text => this._filterListData(text)}
            />
          </View>
        </Header>
        <Content style={{backgroundColor: '#F8F9FA', padding: 10}}>
          <ListTransaksi listData={listData} />
        </Content>
        <Toast ref="defaultToastBottom" position="bottom" />
        <Loading isVisible={this.state.isLoading} />
      </Container>
    );
  }
}

export default HomePageSrc;
