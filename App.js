import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import Main from './Navigators/Main';
import Header from './components/Header';

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar style='auto' />
        <Header />
        <Main />
    </NavigationContainer>
  );
}

