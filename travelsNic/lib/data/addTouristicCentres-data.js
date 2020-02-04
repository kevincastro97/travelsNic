import firebase from 'react-native-firebase';

const TOURISTIC_CENTRES_COLLECTION = 'touristicCentres';

export const touristicCentresQuery = () =>{
    const db = firebase.firestore();
    return db.collection(TOURISTIC_CENTRES_COLLECTION);
};

export const addTouristicCentres = async(data) =>{
    await touristicCentresQuery().add(data);
}