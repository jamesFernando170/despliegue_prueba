import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import {getFirestore} from "firebase/firestore"

const firebaseApp = {
    apiKey: "AIzaSyBDUWhTWBrfvjcf9EVih-mxSayE7zJPd60",
    authDomain: "notificaciones-a1856.firebaseapp.com",
    projectId: "notificaciones-a1856",
    storageBucket: "notificaciones-a1856.appspot.com",
    messagingSenderId: "216294466357",
    appId: "1:216294466357:web:919944fc0099f42655227c",
    measurementId: "G-06Q390ZHE7"
};

const app = initializeApp(firebaseApp)
export const messaging = getMessaging(app);
export const db_firebase = getFirestore();

export const generate_token = async () => {
    const permission = await Notification.requestPermission();

    if (permission == "granted") {
        const token = await getToken(messaging, {
            vapidKey: "BBwN7shmNxQMG_X3Z5OYvzHf1ZVY6VXxe2JSHmGK-dQjsDcsa9LJ_TSGymbXhkuMlQCFcuFzxE0xK4WapUuHsOA"
        });
        console.log("token: " + token);
        return token

    }
}