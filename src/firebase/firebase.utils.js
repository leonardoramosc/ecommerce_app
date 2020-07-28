import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Configuracion recibida por firebase
const config = {
    apiKey: "AIzaSyBg0dKwiPoLR-hL1NrOxjzVnUMn15FKRuk",
    authDomain: "ecom-db-80a1d.firebaseapp.com",
    databaseURL: "https://ecom-db-80a1d.firebaseio.com",
    projectId: "ecom-db-80a1d",
    storageBucket: "ecom-db-80a1d.appspot.com",
    messagingSenderId: "809103275390",
    appId: "1:809103275390:web:a46b87bbc61b7d97462f2f"
};

// funcion para crear usuario y añadirlo a la base de datos
export const createUserProfileDocument = async (userAuth, aditionalUserData) => {
	if( !userAuth ) return;
	// Hacer una consulta a la firestore para verificar si el usuario existe
		// Obtener el documentReference object para luego obtener el snapshop con la data necesaria
	const userRef = firestore.doc(`users/${userAuth.uid}`);
		// Obtener el documentSnapShot para hacer la verificacion
	const userSnapShot = await userRef.get();
	// Si el usuario no existe, entonces crearlo
	if(!userSnapShot.exists){
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		// El document reference (userRef) es el que posee el metodo set para crear un nuevo documento
		try{
			await userRef.set({ 
				displayName, 
				email, 
				createdAt, 
				...aditionalUserData 
			});
		} catch(err) {
			console.log('Error creating user. ' + err.message);
		}
	}

	return userRef;
	
}

// Inicializar api de firebase con la configuracion recibida
firebase.initializeApp(config);

// Crear instancia de auth y de firestore y exportarlas
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Configurar inicio de sesion con api de google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;