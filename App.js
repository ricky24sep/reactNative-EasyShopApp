import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';

import store from './redux/store/store';
import Main from './Navigators/Main';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style='auto' />
        <Main />
      </NavigationContainer>
    </Provider>
  );
}

