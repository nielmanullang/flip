import {View} from 'native-base';
import React from 'react';
import {ActivityIndicator} from 'react-native';

class Loading extends React.Component {
  render() {
    return (
      this.props.isVisible && (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundColor: '#000',
            opacity: 0.8,
          }}>
          <View
            horizontalColumn
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator
              size="large"
              color="#CE9D3C"
              style={{marginBottom: 10}}
            />
          </View>
        </View>
      )
    );
  }
}

export default Loading;
