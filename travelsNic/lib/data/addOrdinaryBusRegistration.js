import firebase from 'react-native-firebase';

const ORDINARY_COLLECTION = 'ordinary';

export const ordinaryQuery = () => {
    const db = firebase.firestore();
    return db.collection(ORDINARY_COLLECTION);
};

export const addOrdinary = async(data) => {
    await ordinaryQuery().add(data);
};