import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductDetailScreen } from './screens/productDetailScreen';
import {NavigationContainer} from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native';
import BestSellerTag from './components/BestSellerTag';
const Stack = createStackNavigator()
export default function App() {
  return (
 <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name='Product Details'
    component={ProductDetailScreen}
  />
  </Stack.Navigator>
  <StatusBar style='auto'/>
 </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
