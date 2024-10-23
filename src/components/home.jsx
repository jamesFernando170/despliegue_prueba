import { db_firebase, generate_token } from '../notifications/firebase';
import { addDoc, collection } from "firebase/firestore";

export function Home({ usuario, fcm_token }){

    const handleButton = async () => {
        const collectionRef = collection(db_firebase, "users");
        const payload = {email: {usuario}, fcm_token: {fcm_token}};
        await addDoc(collectionRef, payload)
    };

    
    return (
        <div className="token">
            <h1 onDoubleClick={handleButton}>BIENVENIDO {usuario}</h1>
        </div>
    )
}