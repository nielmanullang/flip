import {Icon, Text, View} from 'native-base';
import React from 'react';
import {
  convertDate,
  convertNumber,
  convertToUpperCase,
} from './../../../native-base-theme/variables/convert';

const fontSize = 11;

class Transaksi extends React.Component {
  render() {
    let colorStatus = '#868686';
    if (this.props.item.status == 'SUCCESS') colorStatus = '#57B486';
    if (this.props.item.status == 'PENDING') colorStatus = '#FD6542';

    let textStatus = 'Batal';
    if (this.props.item.status == 'SUCCESS') textStatus = 'Berhasil';
    if (this.props.item.status == 'PENDING') textStatus = 'Tertunda';

    return (
      <View
        style={{backgroundColor: '#57B486', borderRadius: 5, marginBottom: 5}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#FFFFFF',
            padding: 15,
            marginLeft: 5,
            borderColor: 50,
          }}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <Text style={{fontWeight: 'bold', fontSize}}>
                {convertToUpperCase(this.props.item.sender_bank)}
              </Text>
              <Icon
                type="FontAwesome"
                name="arrow-right"
                style={{
                  color: '#000000',
                  fontSize: 11,
                  marginLeft: 5,
                  marginRight: 5,
                }}
              />
              <Text style={{fontWeight: 'bold', fontSize}}>
                {convertToUpperCase(this.props.item.beneficiary_bank)}
              </Text>
            </View>
            <Text style={{fontSize}}>
              {convertToUpperCase(this.props.item.beneficiary_name)}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Text style={{fontSize}}>
                {convertNumber(this.props.item.account_number)}
              </Text>
              <Icon
                type="FontAwesome"
                name="circle"
                style={{
                  color: '#000000',
                  fontSize: fontSize / 3,
                  marginLeft: 5,
                  marginRight: 5,
                }}
              />
              <Text style={{fontSize}}>
                {convertDate(this.props.item.created_at)}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: colorStatus,
                padding: 5,
                borderRadius: 5,
              }}>
              <Text
                style={{
                  color: '#FFFF',
                  fontWeight: 'bold',
                  fontSize,
                }}>
                {textStatus}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Transaksi;
