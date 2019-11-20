import {View} from 'native-base';
import React from 'react';
import ItemTransaksi from './../Item/Transaksi';

class Transaksi extends React.Component {
  render() {
    let listData = this.props.listData;
    return (
      <View>
        {Object.keys(listData).map(function(key) {
          if (listData[key].search)
            return <ItemTransaksi key={key} item={listData[key]} />;
        })}
      </View>
    );
  }
}

export default Transaksi;
