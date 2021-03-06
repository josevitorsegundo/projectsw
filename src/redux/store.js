import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import peoplesReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favorites']
};

const rootReducer = combineReducers({ 
  peoplesReducer: persistReducer(persistConfig, peoplesReducer)
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);