import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

import { combineReducers, createStore } from 'redux'
import signUpReducer from '../reducer/signUpReducer';
import loginReducer from '../reducer/loginReducer';

const root = combineReducers({
  login:loginReducer,
  signUp:signUpReducer
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, root)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)