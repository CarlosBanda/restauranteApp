import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Menu from './views/Menu';
import DetallePlatillo from './views/DetallePlatillo';
import FormularioPlatillo from './views/FormularioPlatillo';
import NuevaOrden from './views/NuevaOrden';
import ProgresoPedido from './views/ProgresoPedido';
import ResumenPedido from './views/ResumenPedido';

//state context
import FirebaseState from './context/firebase/firebaseState';

const Stack = createStackNavigator();


const App = () => {
  return (
    <>
      <FirebaseState>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#FFDA00'}, headerTitleStyle:{fontWeight: 'bold'}}}>
            <Stack.Screen name='Menu' component={Menu} options={{title: 'Nuetro Menú'}}/>
            <Stack.Screen name='DetallePlatillo' component={DetallePlatillo} options={{title: 'Detalle Platillo'}}/>
            <Stack.Screen name='FormularioPlatillo' component={FormularioPlatillo} options={{title: 'Formulario Platillo'}}/>
            <Stack.Screen name='NuevaOrden' component={NuevaOrden} options={{title: 'Nueva Orden'}}/>
            <Stack.Screen name='ProgresoPedido' component={ProgresoPedido} options={{title: 'Progreso Pedido'}}/>
            <Stack.Screen name='ResumenPedido' component={ResumenPedido} options={{title: 'Resumen Pedido'}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </FirebaseState>
    </>
  );
};


export default App;
