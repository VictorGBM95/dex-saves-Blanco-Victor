import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

const firestoreFetch = async (producto) => {
    const querySnapshot = await getDocs(collection(db, producto));
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export default firestoreFetch;