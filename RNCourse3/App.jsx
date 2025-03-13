import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsScreen from './screens/MealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import { Ionicons } from '@expo/vector-icons';
import { FavouriteContext } from './store/context/context';
import { useContext } from 'react';
import FavouriteProvider from './store/context/context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return <Drawer.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#351401',
    },
    headerTintColor: 'white',
    sceneStyle: {
      backgroundColor: '#3f2f25'
    },
    drawerContentStyle: {
      backgroundColor: '#351401',
    },
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: '351401',
    drawerActiveBackgroundColor: '#e4baa1',
  }}>
    <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
      title: 'Meal Categories',
      drawerIcon: ({color, size}) => {
        return <Ionicons name="restaurant" size={size} color={color}></Ionicons>
      }
    }} ></Drawer.Screen>
    <Drawer.Screen name="Favourite" component={FavouriteScreen} options={{
      title: 'Favorite Meals',
      drawerIcon: ({color, size}) => {
        return <Ionicons name="star" size={size} color={color}></Ionicons>
      }
    }} ></Drawer.Screen>
  </Drawer.Navigator>
}

export default function App() {
  const favouriteContext = useContext(FavouriteContext)
  return (
    <>
    <FavouriteProvider>
    <StatusBar style='light'></StatusBar>
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
        <Stack.Screen name="Drawer" component={DrawerNavigator} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Meals" component={MealsScreen}/>
        <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{
          title: 'Meal Details',
        }}/>


      </Stack.Navigator>
    </NavigationContainer>
    </FavouriteProvider>
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
