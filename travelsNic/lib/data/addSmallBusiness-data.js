import firebase from 'react-native-firebase'

const SMALL_BUSINESS_COLLECTION = 'smallBusiness';

export const smallBusinessQuery = () =>{
    const db = firebase.firestore();
    return db.collection(SMALL_BUSINESS_COLLECTION);
};

export const addSmallBusiness = async(data) =>{
    await smallBusinessQuery().add(data);
}