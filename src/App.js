import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './components/pages/homepage/homepage.component.jsx';
import ShopPage from './components/shop/shop.component.jsx';
import SignInAndSignUpPage from './components/pages/sign-in-sign-up/sign-in-sign-up.component.jsx';
import Header from './components/header/header.component.jsx';

import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async (userAuth) => {
      /* Si existe un usuario autenticado luego de haberse cargado los componentes,
        - Obtener el usuario de la base de datos (si no existe, crearlo con createUserProfileDocument)
        - Obtener la data del usuario de la base de datos y actualizar el state de la aplicacion
          con esa data.

        NOTA: Al aplicar esto, con la funcion createUserProfileDocument, estariamos verificando
        si el usuario existe en nuestra base de datos, si no existe, entonces lo creamos y luego
        lo obtenemos. Es decir, con todo este codigo estariamos obteniendo el usuario de la base
        de datos (Y creandolo en caso de que se haya logeado con Google) y adicionalmente actualizando 
        el state de la app.
      */
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth, {from: "app.js"});

        /* El metodo onSnapshot es un listener que se activa cuando hay alguna actualizacion
          del documentReference en la base de datos. Sin embargo, este evento tambien
          se dispara cuando se crea una instancia de un documentSnapshot, la cual en este
          caso es creada dentro de la funcion createUserProfileDocument cuando se utiliza
          el metodo get en el parametro que se paso a esa funcion, el cual es el userAuth; 
          es por esta razon que, sin haber actualizado el documentReference (userRef) aun
          podemos usar este metodo para tener acceso a la data dentro del userRef
        */

        userRef.onSnapshot(snapshot => {

          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => console.log(this.state))

        })
      } else {
        this.setState({
          currentUser: userAuth
        })
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  } 
}


export default App;
