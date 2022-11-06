import { StatusBar } from 'expo-status-bar';

import Header from './components/Header';
import ProductContainer from './screens/Products/ProductContainer';

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <Header />
      <ProductContainer />
    </>
  );
}
