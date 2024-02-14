import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TriangleScreen from './components/TriangleScreen';
import SqrScreen from './components/SqrScreen';
import CircleScreen from './components/CircleScreen';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Háromszög" component={TriangleScreen} />
        <Tab.Screen name="Négyzet" component={SqrScreen} />
        <Tab.Screen name="Kör" component={CircleScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

