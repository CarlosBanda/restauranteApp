import React, {useReducer} from 'react'
import firebase from '../../firebase'
import FirebaseReducer from './firebaseReduce';
import FirebaseContext from './firebaseContext';

const FirebaseState = props => {

    //state inicial
    const initialState = {
        menu: []
    }

    //use reduce con dispatch para ejecutar funciones
    const [state, dispatch] = useReducer(FirebaseReducer, initialState);

    return (
        <FirebaseContext.Provider value={{menu: state.menu, firebase}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;