import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsScreen from './screens/MealsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='dark'></StatusBar>
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#351401',
        },
        headerTintColor: 'white',
        contentStyle: {
          backgroundColor: '#3f2f25'
        }
      }}
      >
        <Stack.Screen name="Categories" component={CategoriesScreen} options={{
          title: 'Meal Categories',
        }} />
        <Stack.Screen name="Meals" component={MealsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
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
