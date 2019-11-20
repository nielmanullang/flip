import {NavigationActions, StackActions} from 'react-navigation';
import service from './index';

export const getAsyncStoreSave = (key, data, callback, dataPass) => {
  storage
    .save({
      key: key,
      data: data,
    })
    .then(result => {
      callback && callback.call(this, 'success', dataPass);
    })
    .catch(err => {
      callback && callback.call(this, null);
    });
};

export const getAsyncStoreLoad = (key, callback, dataPass) => {
  storage
    .load({
      key: key,
      autoSync: true,
      syncInBackground: true,
      syncParams: {
        extraFetchOptions: {},
        someFlag: true,
      },
    })
    .then(result => {
      callback && callback.call(this, result, dataPass);
    })
    .catch(err => {
      callback && callback.call(this, null);
    });
};

export const getAsyncStoreRemove = (key, callback) => {
  storage
    .remove({
      key: key,
    })
    .then(result => {
      callback && callback.call(this, 'success');
    })
    .catch(err => {
      callback && callback.call(this, null);
    });
};

export const apiCall = {
  post: async (endpoint, data, callback, header, dataPass) => {
    await service
      .post(endpoint, data, header)
      .then(result => {
        callback && callback.call(this, result, dataPass);
      })
      .catch(error => {
        var tempResult = error.response ? error.response : null;
        callback && callback.call(this, tempResult);
      });
  },
  put: async (endpoint, data, callback, header, dataPass) => {
    await service
      .put(endpoint, data, header)
      .then(result => {
        callback && callback.call(this, result, dataPass);
      })
      .catch(error => {
        var tempResult = error.response ? error.response : null;
        callback && callback.call(this, tempResult);
      });
  },
  get: async (endpoint, header, callback, dataPass) => {
    await service
      .get(endpoint, header)
      .then(result => {
        callback && callback.call(this, result, dataPass);
      })
      .catch(error => {
        var tempResult = error.response ? error.response : null;
        callback && callback.call(this, tempResult);
      });
  },
  delete: async (endpoint, data, callback, header, dataPass) => {
    await service
      .delete(endpoint, data, header)
      .then(result => {
        callback && callback.call(this, result, dataPass);
      })
      .catch(error => {
        var tempResult = error.response ? error.response : null;
        callback && callback.call(this, tempResult);
      });
  },
};

export const resetNavigation = (targetRoute, navigation, dataPass) => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName: targetRoute,
        params: {dataPass},
      }),
    ],
  });
  navigation.dispatch(resetAction);
};
