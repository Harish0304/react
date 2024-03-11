import { applyMiddleware, legacy_createStore } from 'redux';
import {  persistStore,persistReducer } from 'redux-persist';
import {thunk} from 'redux-thunk';
import immutableTransform from 'redux-persist-transform-immutable';
// import { storage } from './storage-persist';
import storage from 'redux-persist/es/storage';
import UserFormReducer from './reducer/userForm.reducer';
import PracticeFormReducer from './reducer/practice_form.reducer';
import AddProductReducer from './reducer/addproduct.reducer';

const persistConfig: any = {
  transforms: [immutableTransform()],
  key: 'root',
  storage: storage,
  blacklist: ['getAllProperties'],
};
const persistedReducer = persistReducer<any, any>(persistConfig, AddProductReducer);
const middleware = applyMiddleware(thunk );
let store = legacy_createStore(persistedReducer, middleware);
let persistor = persistStore(store);
const stores = { store, persistor }
export default stores;